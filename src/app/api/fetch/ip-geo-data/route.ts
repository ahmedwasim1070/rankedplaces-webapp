// Imports
import { NextRequest, NextResponse } from "next/server";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import { ApiResponse, IpGeoDataResponse } from "@/types";

//
export async function GET(request: NextRequest) {
  // Fetch IP
  const forwardedFor = request.headers.get("x-forwarded-for");
  let userIp = forwardedFor
    ? forwardedFor.split(",")[0].trim()
    : request.headers.get("x-real-ip") || "127.0.0.1";

  if (userIp.startsWith("::ffff:")) {
    userIp = userIp.replace("::ffff:", "");
  }

  try {
    if (!process.env.IPGEOLOCATION_KEY) {
      throw new ApiError("Server Configuration Error.", 500);
    }

    if (!userIp || userIp === "") {
      throw new ApiError("Ip is required.", 400);
    }

    if (process.env.NODE_ENV !== "production") {
      userIp = "101.50.68.144";
    }

    const response = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEOLOCATION_KEY}&ip=${userIp}`
    );
    if (!response.ok) {
      throw new ApiError("Error from external api.", response.status);
    }

    const data = await response.json();
    if (
      !data ||
      !data.country_name ||
      !data.country_code2 ||
      !data.country_capital ||
      !data.latitude ||
      !data.longitude
    ) {
      throw new ApiError("Error from external api.Incomplelete Response", 404);
    }

    const userIpGeoData: IpGeoDataResponse = {
      country: data.country,
      countryCode: data.country_code2,
      capital: data.capital,
      lat: data.latitude,
      lng: data.longitude,
    };

    return NextResponse.json<ApiResponse<IpGeoDataResponse>>({
      success: true,
      data: userIpGeoData,
      message: "Successfully fetchedIpGeoData.",
    });
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error(
      "Error in fetch/ip-geo-data.",
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
