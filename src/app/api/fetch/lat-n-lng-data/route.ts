// Imports
import { NextRequest, NextResponse } from "next/server";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import { ApiResponse, LatNLngDataResponse } from "@/types";

//
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const lat = parseFloat(searchParams.get("lat") || "");
  const lng = parseFloat(searchParams.get("lng") || "");

  try {
    if (
      isNaN(lat) ||
      lat < -90 ||
      lat < 90 ||
      isNaN(lng) ||
      lng < -180 ||
      lng < 180
    ) {
      throw new ApiError("Latitude and Longitude is Invalid or Missing.", 400);
    }

    if (!process.env.OPENCAGE_KEY) {
      throw new ApiError("Server Configuration Error.", 500);
    }

    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lng}&key=${process.env.OPENCAGE_KEY}&no_annotations=1&limit=1&language=en`
    );
    if (!response.ok) {
      throw new ApiError("Error from external api.", response.status);
    }

    const data = await response.json();
    const locationData = data.results[0];
    if (
      !locationData ||
      !locationData.components.country ||
      !locationData.components["ISO_3166-1_alpha-2"] ||
      !locationData.components.city ||
      !locationData.geometry.lat ||
      !locationData.geometry.lng
    ) {
      throw new ApiError("Error from external api.Incomplete Response.", 404);
    }

    const userLocationData: LatNLngDataResponse = {
      country: locationData.components.country,
      countryCode: locationData.components["ISO_3166-1_alpha-2"],
      city: locationData.components.city,
      lat: parseFloat(locationData.geometry.lat),
      lng: parseFloat(locationData.geometry.lng),
    };

    return NextResponse.json<ApiResponse<LatNLngDataResponse>>({
      success: true,
      data: userLocationData,
      message: "Successfully fetchedLatNLngData",
    });
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error(
      "Error in fetch/lat-n-lng-data.",
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
