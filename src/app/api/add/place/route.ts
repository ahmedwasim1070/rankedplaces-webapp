// Imports
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// Lib
import { ApiError } from "@/lib/error/ApiError";
import { prisma } from "@/lib/prisma/prisma";
import { findPlaceInDb } from "@/lib/api/helper/findPlaceByIdInDb";
// Types
import { AddPlaceForm, ApiResponse } from "@/types";
import { Tags } from "@/generated/prisma";
import { getAddressComponent } from "@/utils";

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

    if (
      !userAddedTags ||
      userAddedTags.length <= 0 ||
      userAddedTags.length > 6
    ) {
      throw new ApiError(
        "Tags should be more then one and less then six.",
        404
      );
    }

    const uniqueUserAddedTags = [...new Set(userAddedTags)];

    const tagsInDb: Tags[] = await prisma.tags.findMany({
      where: {
        name: { in: uniqueUserAddedTags },
      },
    });
    if (!tagsInDb || tagsInDb.length === 0) {
      throw new ApiError("One or more Tags does not exsits.", 404);
    }

    if (
      !placeByGoogle ||
      !placeByGoogle.place_id ||
      !placeByGoogle.geometry.location.lat ||
      !placeByGoogle.geometry.location.lng ||
      !placeByGoogle.formatted_phone_number
    ) {
      throw new ApiError("Invalid Place data.", 404);
    }

    const result = await prisma.$transaction(async (tx) => {
      const placeInDb = await findPlaceInDb(
        tx,
        placeByGoogle.place_id,
        placeByGoogle.geometry.location.lat,
        placeByGoogle.geometry.location.lng,
        placeByGoogle.formatted_address
      );

      let place;
      if (placeInDb) {
        place = await tx.places.update({
          where: { id: placeInDb.id },
          data: {
            place_id: placeByGoogle.place_id,
            name: placeByGoogle.name,
            address: placeByGoogle.formatted_address,
            lat: placeByGoogle.geometry.location.lat,
            lng: placeByGoogle.geometry.location.lng,
            phone: placeByGoogle.international_phone_number,
            website: placeByGoogle.website,
            maps_url: placeByGoogle.url,
            review_value: placeByGoogle.rating,
            review_amount: placeByGoogle.user_ratings_total,
          },
        });

        const tagIds = tagsInDb.map((tag) => tag.id);
        const tagsWithPlace = await tx.placeTags.findMany({
          where: {
            tag_id: { in: tagIds },
          },
        });

        if (tagsWithPlace || tagsWithPlace > 0) {
          throw new ApiError(
            "One or more tag already exsist's with this place",
            409
          );
        }
      } else {
        place = await tx.places.create({
          data: {
            place_id: placeByGoogle.place_id,
            name: placeByGoogle.name,
            category: placeByGoogle.types[0],
            address: placeByGoogle.formatted_address,
            city:
              getAddressComponent(placeByGoogle.address_components, "locality")
                ?.long_name || "Unknown",
            lat: placeByGoogle.geometry.location.lat,
            lng: placeByGoogle.geometry.location.lng,
            country:
              getAddressComponent(placeByGoogle.address_components, "country")
                ?.long_name || "Unknown",
            country_code:
              getAddressComponent(placeByGoogle.address_components, "country")
                ?.short_name || "Unknown",
            phone: placeByGoogle.international_phone_number,
            website: placeByGoogle.website,
            maps_url: placeByGoogle.url || "https://maps.google.com",
            review_value: placeByGoogle.rating,
            review_amount: placeByGoogle.user_ratings_total,
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

      //
      return place;
    });

    if (!result) {
      throw new ApiError("Place not found invalid Place Id.", 404);
    }

    return NextResponse.json<ApiResponse<null>>({
      success: true,
      data: null,
      message: "Added Place with provided tags.",
    });
    //
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error(
      "Error in /add/place.",
      "Message : ",
      message,
      "Error : ",
      error
    );
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
