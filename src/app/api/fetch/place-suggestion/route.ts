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
  const countryCode = searchParams.get(`country-code`);
  const lat = parseFloat(searchParams.get("lat") || "");
  const lng = parseFloat(searchParams.get("lng") || "");

  if (
    (!isNaN(lat) && (lat < -90 || lat > 90)) ||
    (!isNaN(lng) && (lat < -180 || lat > 180))
  ) {
    throw new ApiError("Latitude/Longitude is Invalid.", 400);
  }
  try {
    if (!process.env.GOOGLE_PLACES_API_KEY) {
      throw new ApiError("Server Configuration Error.", 500);
    }

    const uniqueId = token?.unique_id;
    if (!uniqueId) {
      throw new ApiError("No user found.", 401);
    }

    if (!searchedPlace || searchedPlace.length < 3) {
      throw new ApiError("searched-place value is Invalid or required.", 400);
    }

    let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
      searchedPlace
    )}`;
    if (countryCode && (isNaN(lat) || isNaN(lng))) {
      url += `&components=country:${countryCode}`;
    } else if (countryCode && !isNaN(lat) && !isNaN(lng)) {
      url += `&components=country:${countryCode}&location=${lat},${lng}&radius=50000`;
    }
    url += `&key=${process.env.GOOGLE_PLACES_API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new ApiError("Error from external api.", response.status);
    }

    const data = await response.json();

    const suggestedPlace: PlaceSuggestionResponse[] = data.predictions;
    if (!Array.isArray(suggestedPlace)) {
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
    console.error("Error in /fetch/place-suggestion API:", {
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
