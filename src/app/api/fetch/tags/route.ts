// Imports
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import {
  ApiResponse,
  worldFetchTagsResponse,
  countryFetchsTagResponse,
  cityFetchTagsResponse,
} from "@/types";
import { isValidLatnLng } from "@/lib/api/validators";

//
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fetchBy = searchParams.get("fetch-by");

  try {
    if (fetchBy === "world") {
      const tags: worldFetchTagsResponse[] = await prisma.tags.findMany({
        include: {
          _count: {
            select: {
              place_tag: true,
            },
          },
        },
        orderBy: {
          place_tag: {
            _count: "desc",
          },
        },
        take: 25,
      });

      return NextResponse.json<ApiResponse<worldFetchTagsResponse[]>>({
        success: true,
        message: "Successfully fetched tags.",
        data: tags,
      });
    } else if (fetchBy === "country") {
      const countryCode = searchParams.get("country-code");
      if (!countryCode) {
        throw new ApiError(
          "Country code is required with country fetchBy.",
          400
        );
      }

      const tags: countryFetchsTagResponse[] = await prisma.tags.findMany({
        where: {
          place_tag: {
            some: {
              place: { country_code: countryCode },
            },
          },
        },
        include: {
          _count: {
            select: {
              place_tag: {
                where: {
                  place: { country_code: countryCode },
                },
              },
            },
          },
        },
        orderBy: {
          place_tag: {
            _count: "desc",
          },
        },
        take: 25,
      });

      return NextResponse.json<ApiResponse<countryFetchsTagResponse[]>>({
        success: true,
        message: "Successfully fetched tags.",
        data: tags,
      });
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
      const radius = 50000;

      const tags = await prisma.$queryRaw<cityFetchTagsResponse[]>`
        SELECT t.id,
          t.name,
          COUNT(pt.*)::int AS tag_count
        FROM "Tags" t
        JOIN "PlaceTags" pt ON pt.tag_id = t.id
        JOIN "Places" p ON pt.place_id = p.id
        WHERE ST_DWithin(
        geography(p.geom),
        geography(ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)),
        ${radius}
        )
        GROUP BY t.id
        ORDER BY tag_count DESC;
      `;

      return NextResponse.json<ApiResponse<cityFetchTagsResponse[]>>({
        success: true,
        message: "Successfully fetched tags.",
        data: tags,
      });
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
    console.error("Error in /fetch/tags API:", {
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
