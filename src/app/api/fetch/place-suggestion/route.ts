// Imports
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import { ApiResponse, PlaceSuggestionResponse } from "@/types";

//
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const searchedPlace = searchParams.get(`searched-place`);
  try {
    const uniqueId = token?.unique_id;
    if (!uniqueId) {
      throw new ApiError("No user found.", 404);
    }

    if (!searchedPlace || searchedPlace.length < 3) {
      throw new ApiError("searched-place value is Invalid or required.", 400);
    }

    if (!process.env.GOOGLE_PLACES_API_KEY) {
      throw new ApiError("Server Configuration Error.", 500);
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
        searchedPlace
      )}&key=${process.env.GOOGLE_PLACES_API_KEY}`
    );
    if (!response.ok) {
      throw new ApiError("Error from external api.", response.status);
    }

    const data = await response.json();

    const suggestedPlace: PlaceSuggestionResponse[] = data.predictions;
    if (!suggestedPlace) {
      throw new ApiError("Error from external api.Incomplelete Response.", 404);
    }

    return NextResponse.json<ApiResponse<PlaceSuggestionResponse[]>>({
      success: true,
      data: suggestedPlace,
      message: "Successfully fetchedPlaceSuggestion.",
    });
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error(
      "Error in fetch/place-suggestion.",
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
