// Imports
import { NextRequest, NextResponse } from "next/server";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import { ApiResponse, CapitalReponse } from "@/types";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  try {
    if (!process.env.GEONAME_USERNAME) {
      throw new ApiError("Server Configuration Error.", 500);
    }

    const capital = searchParams.get("capital");
    if (!capital) {
      throw new ApiError("Country code is required.", 404);
    }

    const response = await fetch(
      `http://api.geonames.org/searchJSON?q=${capital}&maxRows=1&username=${process.env.GEONAME_USERNAME}`
    );
    if (!response.ok) {
      throw new ApiError("Error from external api.", response.status);
    }

    const data = await response.json();
    const locationData = data.geonames[0];

    if (!locationData) {
      throw new ApiError("Error from external api.Incomplelete Response.", 404);
    }

    const capitalData: CapitalReponse = {
      city: locationData.name,
      lat: parseFloat(locationData.lat),
      lng: parseFloat(locationData.lng),
    };

    return NextResponse.json<ApiResponse<CapitalReponse>>({
      success: true,
      data: capitalData,
      message: "Successfully fetchedCountries.",
    });
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error("Error in /fetch/capital API:", {
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
