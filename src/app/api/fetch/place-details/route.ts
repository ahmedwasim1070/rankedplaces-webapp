// Imports
import { NextRequest, NextResponse } from "next/server";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import {
  ApiResponse,
  PlaceDetailsByGoogle,
  PlaceDetailsResponse,
} from "@/types";
import { findPlaceInDb } from "@/lib/api/helper/findPlaceByIdInDb";

//
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const placeId = searchParams.get("place-id");

  try {
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

    const placeByDb = await findPlaceInDb(
      placeByGoogle.place_id,
      placeByGoogle.geometry.location.lat,
      placeByGoogle.geometry.location.lng,
      placeByGoogle.formatted_address
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
