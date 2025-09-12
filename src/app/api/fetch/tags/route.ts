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
              place_tags: true,
            },
          },
        },
        orderBy: {
          place_tags: {
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
      const country = searchParams.get("country");
      if (!country) {
        throw new ApiError(
          "Country code is required with country fetchBy.",
          400
        );
      }

      const tags: countryFetchsTagResponse[] = await prisma.tags.findMany({
        where: {
          place_tags: {
            some: {
              place: { country },
            },
          },
        },
        include: {
          _count: {
            select: {
              place_tags: {
                where: {
                  place: { country },
                },
              },
            },
          },
        },
        orderBy: {
          place_tags: {
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
      const country = searchParams.get("country");
      if (!country) {
        throw new ApiError("Country code is required with city fetchBy.", 400);
      }

      const city = searchParams.get("city");
      if (!city) {
        throw new ApiError("City code is required with city fetchBy.", 400);
      }

      const tags: cityFetchTagsResponse[] = await prisma.tags.findMany({
        where: {
          place_tags: {
            some: {
              place: {
                country,
                city,
              },
            },
          },
        },
        include: {
          _count: {
            select: {
              place_tags: {
                where: {
                  place: { country, city },
                },
              },
            },
          },
        },
        orderBy: {
          place_tags: {
            _count: "desc",
          },
        },
      });
      return NextResponse.json<ApiResponse<cityFetchTagsResponse[]>>({
        success: true,
        message: "Successfully fetched tags.",
        data: tags,
      });
    } else {
      throw new ApiError("Invalid request type.", 400);
    }
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error(
      "Error in fetch/tags.",
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
