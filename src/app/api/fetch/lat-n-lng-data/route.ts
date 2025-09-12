// Imports
import { NextRequest, NextResponse } from "next/server";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import { ApiResponse, LatNLngResponse } from "@/types";

//
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  let lat = parseFloat(searchParams.get("lat") || "0");
  let lng = parseFloat(searchParams.get("lng") || "0");

  try {
    if (!lat || !lng || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
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
      !locationData.components.country_code ||
      !locationData.components.city ||
      !locationData.components.town ||
      !locationData.components.village ||
      !locationData.geometry.lat ||
      !locationData.geometry.lng
    ) {
      throw new ApiError("Error from external api.Incomplete Response.", 404);
    }

    const latNLngResponsePayload: LatNLngResponse = {
      country: locationData.components.country,
      countryCode: locationData.components.country_code,
      defaultCity:
        locationData.components.city ||
        locationData.components.town ||
        locationData.components.village,
      lat: locationData.geometry.lat,
      lng: locationData.geometry.lng,
    };

    return NextResponse.json<ApiResponse<LatNLngResponse>>({
      success: true,
      data: latNLngResponsePayload,
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
