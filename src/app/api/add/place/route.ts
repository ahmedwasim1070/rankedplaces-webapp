// Imports
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// Lib
import { ApiError } from "@/lib/error/ApiError";
import { isValidTags, isValidLatnLng } from "@/lib/api/validators";
import { prisma } from "@/lib/prisma/prisma";
import { findPlaceInDb } from "@/lib/api/helper/findPlaceByIdInDb";
// Utils
import { sanitizeString, getAddressComponent } from "@/utils";
// Types
import { AddPlaceForm, ApiResponse } from "@/types";
import { Tags } from "@/generated/prisma";

//
export async function POST(request: NextRequest) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    const uniqueId = token?.unique_id;

    const body: AddPlaceForm = await request.json();
    const { placeByGoogle, userAddedTags } = body;

    if (!uniqueId) {
      throw new ApiError("No user found.", 401);
    }

    const user = await prisma.users.findUnique({
      where: {
        unique_id: uniqueId,
      },
    });
    if (!user) {
      throw new ApiError("No user found.", 401);
    }

    const sanitizedTags = isValidTags(userAddedTags);
    if (sanitizedTags.length <= 0 || sanitizedTags.length > 6) {
      throw new ApiError("Tags should be between 1 and 6 valid tags.", 400);
    }

    const uniqueUserAddedTags = [...new Set(sanitizedTags)];

    const tagsInDb: Tags[] = await prisma.tags.findMany({
      where: {
        name: { in: uniqueUserAddedTags },
      },
    });
    if (!tagsInDb || tagsInDb.length === 0) {
      throw new ApiError("One or more tags do not exist.", 404);
    }

    if (
      !placeByGoogle ||
      !placeByGoogle.place_id ||
      !placeByGoogle.geometry?.location?.lat ||
      !placeByGoogle.geometry?.location?.lng ||
      !placeByGoogle.name ||
      !placeByGoogle.formatted_address
    ) {
      throw new ApiError("Invalid or incomplete place data.", 400);
    }

    if (
      !isValidLatnLng(
        placeByGoogle.geometry.location.lat,
        placeByGoogle.geometry.location.lng
      )
    ) {
      throw new ApiError("Invalid latitude or longitude values.", 400);
    }

    const sanitizedPlace = {
      place_id: sanitizeString(placeByGoogle.place_id, 100),
      name: sanitizeString(placeByGoogle.name, 255),
      formatted_address: sanitizeString(placeByGoogle.formatted_address, 500),
      lat: placeByGoogle.geometry.location.lat,
      lng: placeByGoogle.geometry.location.lng,
      category: placeByGoogle.types?.[0]
        ? sanitizeString(placeByGoogle.types[0], 100)
        : "establishment",
      international_phone_number: placeByGoogle.international_phone_number
        ? sanitizeString(placeByGoogle.international_phone_number, 50)
        : null,
      website: placeByGoogle.website
        ? sanitizeString(placeByGoogle.website, 500)
        : null,
      url: placeByGoogle.url
        ? sanitizeString(placeByGoogle.url, 500)
        : "https://maps.google.com",
      rating:
        typeof placeByGoogle.rating === "number" ? placeByGoogle.rating : 0.0,
      user_ratings_total:
        typeof placeByGoogle.user_ratings_total === "number"
          ? placeByGoogle.user_ratings_total
          : 0,
    };

    const result = await prisma.$transaction(async (tx) => {
      const placeInDb = await findPlaceInDb(
        tx,
        sanitizedPlace.place_id,
        sanitizedPlace.lat,
        sanitizedPlace.lng,
        sanitizedPlace.formatted_address
      );

      let place;
      if (placeInDb) {
        const tagIds = tagsInDb.map((tag) => tag.id);
        const existingPlaceTags = await tx.placeTags.findMany({
          where: {
            place_id: placeInDb.id,
            tag_id: { in: tagIds },
          },
        });

        if (existingPlaceTags && existingPlaceTags.length > 0) {
          throw new ApiError(
            "One or more tags already exist for this place",
            409
          );
        }

        place = await tx.places.update({
          where: { id: placeInDb.id },
          data: {
            place_id: sanitizedPlace.place_id,
            name: sanitizedPlace.name,
            address: sanitizedPlace.formatted_address,
            lat: sanitizedPlace.lat,
            lng: sanitizedPlace.lng,
            phone: sanitizedPlace.international_phone_number,
            website: sanitizedPlace.website,
            maps_url: sanitizedPlace.url,
            review_value: sanitizedPlace.rating,
            review_amount: sanitizedPlace.user_ratings_total,
          },
        });
      } else {
        const cityComponent = placeByGoogle.address_components
          ? getAddressComponent(placeByGoogle.address_components, "locality")
          : null;
        const countryComponent = placeByGoogle.address_components
          ? getAddressComponent(placeByGoogle.address_components, "country")
          : null;

        place = await tx.places.create({
          data: {
            place_id: sanitizedPlace.place_id,
            name: sanitizedPlace.name,
            category: sanitizedPlace.category,
            address: sanitizedPlace.formatted_address,
            city: cityComponent?.long_name
              ? sanitizeString(cityComponent.long_name, 100)
              : "Unknown",
            lat: sanitizedPlace.lat,
            lng: sanitizedPlace.lng,
            country: countryComponent?.long_name
              ? sanitizeString(countryComponent.long_name, 100)
              : "Unknown",
            country_code: countryComponent?.short_name
              ? sanitizeString(countryComponent.short_name, 10)
              : "Unknown",
            phone: sanitizedPlace.international_phone_number,
            website: sanitizedPlace.website,
            maps_url: sanitizedPlace.url,
            review_value: sanitizedPlace.rating,
            review_amount: sanitizedPlace.user_ratings_total,
            added_by_id: user.id,
          },
        });
      }

      await tx.placeTags.createMany({
        data: tagsInDb.map((tag) => ({
          place_id: place.id,
          tag_id: tag.id,
        })),
      });

      return place;
    });

    if (!result) {
      throw new ApiError("Failed to create place.", 500);
    }

    return NextResponse.json<ApiResponse<null>>(
      {
        success: true,
        data: null,
        message: "Added place with provided tags successfully.",
      },
      {
        status: 200,
      }
    );
    //
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError
        ? error.message
        : "An unexpected error occurred.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error("Error in /add/place API:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    // Response
    return NextResponse.json<ApiResponse<never>>(
      {
        success: false,
        message,
      },
      {
        status,
      }
    );
  }
}
