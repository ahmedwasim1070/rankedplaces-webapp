// Imports
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// Lib
import { ApiError } from "@/lib/error/ApiError";
import { findPlaceInDb } from "@/lib/api/helper/findPlaceByIdInDb";
// Types
import {
  ApiResponse,
  PlaceDetailsByGoogle,
  PlaceDetailsResponse,
  PlacesAndTags,
} from "@/types";
import { prisma } from "@/lib/prisma/prisma";

//
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const placeId = searchParams.get("place-id");

  try {
    const uniqueId = token?.unique_id;
    if (!uniqueId) {
      throw new ApiError("No user found.", 401);
    }

    if (!process.env.GOOGLE_PLACES_API_KEY) {
      throw new ApiError("Server Configuration Error.", 500);
    }

    if (!placeId || placeId.length < 10 || typeof placeId !== "string") {
      throw new ApiError("place-id is Invalid or Missing.", 400);
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_PLACES_API_KEY}`
    );
    if (!response.ok) {
      throw new ApiError("Error from external api.", response.status);
    }

    const data = await response.json();
    if (!data.result) {
      throw new ApiError("Error from external api.Incomplelete Response.", 404);
    }

    const placeByGoogle: PlaceDetailsByGoogle = data.result;
    if (
      !placeByGoogle ||
      !placeByGoogle.place_id ||
      !placeByGoogle.geometry.location.lat ||
      !placeByGoogle.geometry.location.lng ||
      !placeByGoogle.formatted_address
    ) {
      throw new ApiError("Error from external api.Incomplelete Response.", 404);
    }

    const placeByDb: PlacesAndTags | null = await prisma.$transaction(
      async (tx) => {
        return await findPlaceInDb(
          tx,
          placeByGoogle.place_id,
          placeByGoogle.geometry.location.lat,
          placeByGoogle.geometry.location.lng,
          placeByGoogle.formatted_address
        );
      }
    );

    const placeDetails: PlaceDetailsResponse = {
      googleData: data.result,
      dbData: placeByDb,
    };

    return NextResponse.json<ApiResponse<PlaceDetailsResponse>>({
      success: true,
      data: placeDetails,
      message: "Successfully fetchedPlaceDetails.",
    });
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error(
      "Error in fetch/place-details.",
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
