// Imports
import { NextRequest, NextResponse } from "next/server";
// Lib
import { ApiError } from "@/lib/error/ApiError";
import { isValidLatnLng } from "@/lib/api/validators";
// Types
import { ApiResponse } from "@/types";
import { prisma } from "@/lib/prisma/prisma";
import { Places } from "@/generated/prisma";

// Global
const limit = 25;

//
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const fetchBy = searchParams.get("fetch-by");
  const page = parseInt(searchParams.get("page") || "");
  const tag = searchParams.get("tag");

  try {
    if (isNaN(page) || page <= 0 || page >= 1000 || typeof page !== "number") {
      throw new ApiError("Invalid Page number.", 400);
    }

    if (!tag || typeof tag !== "string" || tag.length < 2) {
      throw new ApiError("Invalid Tag name.", 400);
    }

    if (fetchBy === "world") {
      const worldPlaces: Places[] = await prisma.$queryRaw`
        SELECT 
          id,
          place_id,
          name,
          pfp,
          category,
          address,
          city,
          lat,
          lng,
          country,
          country_code,
          phone,
          website,
          maps_url,
          review_value,
          review_amount,
          total_up_votes,
          total_down_votes,
          added_by_id,
          (total_up_votes - total_down_votes) AS score
        FROM "Places"
        ORDER BY score DESC
        OFFSET ${(page - 1) * limit}
        LIMIT ${limit}
      `;

      if (worldPlaces.length > 0) {
        throw new ApiError("No Places found.", 404);
      }

      return NextResponse.json<ApiResponse<Places[]>>({
        success: true,
        message: "Successfully fetched places.",
        data: worldPlaces,
      });
    } else if (fetchBy === "country") {
      const countryCode = searchParams.get("country-code");
      if (
        !countryCode ||
        typeof countryCode !== "string" ||
        countryCode.length > 2
      ) {
        throw new ApiError(
          "Country code is required with country fetchBy.",
          400
        );
      }
    } else if (fetchBy === "city") {
      const countryCode = searchParams.get("country-code");
      if (
        !countryCode ||
        typeof countryCode !== "string" ||
        countryCode.length > 2
      ) {
        throw new ApiError("Country code is required with city fetchBy.", 400);
      }

      const lat = parseFloat(searchParams.get("lat") || "");
      const lng = parseFloat(searchParams.get("lng") || "");
      if (!isValidLatnLng(lat, lng)) {
        throw new ApiError(
          "Latitude/Longitude is Invalid or Missing which is required in city fetchBy.",
          400
        );
      }
    } else {
      throw new ApiError("Invalid Fetch type.", 400);
    }
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error("Error in /fetch/places API:", {
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
