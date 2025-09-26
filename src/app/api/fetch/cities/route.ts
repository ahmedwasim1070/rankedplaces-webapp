// Imports
import { NextRequest, NextResponse } from "next/server";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import { ApiResponse, CitiesResponse } from "@/types";

//
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  try {
    if (!process.env.GEONAME_USERNAME) {
      throw new ApiError("Server Configuration Error.", 500);
    }

    const country = searchParams.get("country");
    if (!country || country.length < 2) {
      throw new ApiError("Country code is required.", 404);
    }

    const response = await fetch(
      `http://api.geonames.org/searchJSON?country=${country}&featureClass=P&orderby=population&maxRows=150&username=${process.env.GEONAME_USERNAME}`
    );
    if (!response.ok) {
      throw new ApiError("Error from external api.", response.status);
    }

    const data = await response.json();

    const geoData = data?.geonames;
    if (!geoData || geoData.length === 0) {
      throw new ApiError("Error from external api.Incomplelete Response.", 404);
    }

    const cityData: CitiesResponse[] = geoData.map((cityInfo: any) => ({
      name: cityInfo.name,
      lat: parseFloat(cityInfo.lat),
      lng: parseFloat(cityInfo.lng),
    }));

    return NextResponse.json<ApiResponse<CitiesResponse[]>>({
      success: true,
      data: cityData,
      message: "Successfully fetchedCities.",
    });
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error("Error in /fetch/cities API:", {
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
