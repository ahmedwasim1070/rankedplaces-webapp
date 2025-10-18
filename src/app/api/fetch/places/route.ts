// Imports
import { NextRequest, NextResponse } from "next/server";
// Lib
import { ApiError } from "@/lib/error/ApiError";
import { isValidLatnLng } from "@/lib/api/validators";
// Types
import { ApiResponse, PlacesResponse } from "@/types";
import { prisma } from "@/lib/prisma/prisma";

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

    let places: PlacesResponse[] | null = null;
    if (fetchBy === "world") {
      if (tag === "All") {
        places = await prisma.$queryRaw`
        SELECT 
          p.id,
          p.place_id,
          p.name,
          p.pfp,
          p.category,
          p.address,
          p.city,
          p.lat,
          p.lng,
          p.country,
          p.country_code,
          p.phone,
          p.website,
          p.maps_url,
          p.review_value,
          p.review_amount,
          p.total_up_votes,
          p.total_down_votes,
          p.added_by_id,
          (p.total_up_votes - p.total_down_votes) AS score,
          COALESCE(
            json_agg(
              DISTINCT jsonb_build_object(
                'place_id', pt.place_id,
                'tag_id', pt.tag_id,
                'up_votes', pt.up_votes,
                'down_votes', pt.down_votes,
                'tag_name', t.name
              )
            ) FILTER (WHERE t.id IS NOT NULL),
          '[]'
          ) AS tags
        FROM "Places" AS p
        LEFT JOIN "PlaceTags" AS pt ON pt.place_id = p.id
        LEFT JOIN "Tags" AS t ON t.id = pt.tag_id
        GROUP BY p.id
        ORDER BY score DESC
        OFFSET ${(page - 1) * limit}
        LIMIT ${limit};
      `;
      } else {
        places = await prisma.$queryRaw`
        SELECT 
          p.id,
          p.place_id,
          p.name,
          p.pfp,
          p.category,
          p.address,
          p.city,
          p.lat,
          p.lng,
          p.country,
          p.country_code,
          p.phone,
          p.website,
          p.maps_url,
          p.review_value,
          p.review_amount,
          p.total_up_votes,
          p.total_down_votes,
          p.added_by_id,
          (p.total_up_votes - p.total_down_votes) AS score,
          COALESCE(
            json_agg(
              DISTINCT jsonb_build_object(
                'place_id', pt.place_id,
                'tag_id', pt.tag_id,
                'up_votes', pt.up_votes,
                'down_votes', pt.down_votes,
                'tag_name', t.name
              )
            ) FILTER (WHERE t.id IS NOT NULL),
          '[]'
          ) AS tags
        FROM "Places" AS p
        LEFT JOIN "PlaceTags" AS pt ON pt.place_id = p.id
        LEFT JOIN "Tags" AS t ON t.id = pt.tag_id AND t.name = ${tag}
        WHERE t.name = ${tag}
        GROUP BY p.id
        ORDER BY score DESC
        OFFSET ${(page - 1) * limit}
        LIMIT ${limit};
      `;
      }
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

      if (tag === "All") {
        places = await prisma.$queryRaw`
        SELECT 
          p.id,
          p.place_id,
          p.name,
          p.pfp,
          p.category,
          p.address,
          p.city,
          p.lat,
          p.lng,
          p.country,
          p.country_code,
          p.phone,
          p.website,
          p.maps_url,
          p.review_value,
          p.review_amount,
          p.total_up_votes,
          p.total_down_votes,
          p.added_by_id,
          (p.total_up_votes - p.total_down_votes) AS score,
          COALESCE(
            json_agg(
              DISTINCT jsonb_build_object(
                'place_id', pt.place_id,
                'tag_id', pt.tag_id,
                'up_votes', pt.up_votes,
                'down_votes', pt.down_votes,
                'tag_name', t.name
              )
            ) FILTER (WHERE t.id IS NOT NULL),
          '[]'
          ) AS tags
        FROM "Places" AS p 
        LEFT JOIN "PlaceTags" AS pt ON pt.place_id = p.id
        LEFT JOIN "Tags" AS t ON t.id = pt.tag_id
        WHERE p.country_code = ${countryCode}
        GROUP BY p.id
        ORDER BY score DESC
        OFFSET ${(page - 1) * limit}
        LIMIT ${limit};
      `;
      } else {
        places = await prisma.$queryRaw`
        SELECT 
          p.id,
          p.place_id,
          p.name,
          p.pfp,
          p.category,
          p.address,
          p.city,
          p.lat,
          p.lng,
          p.country,
          p.country_code,
          p.phone,
          p.website,
          p.maps_url,
          p.review_value,
          p.review_amount,
          p.total_up_votes,
          p.total_down_votes,
          p.added_by_id,
          (p.total_up_votes - p.total_down_votes) AS score,
          COALESCE(
            json_agg(
              DISTINCT jsonb_build_object(
                'place_id', pt.place_id,
                'tag_id', pt.tag_id,
                'up_votes', pt.up_votes,
                'down_votes', pt.down_votes,
                'tag_name', t.name
              )
            ) FILTER (WHERE t.id IS NOT NULL),
          '[]'
          ) AS tags
        FROM "Places" AS p
        LEFT JOIN "PlaceTags" AS pt ON pt.place_id = p.id
        LEFT JOIN "Tags" AS t ON t.id = pt.tag_id AND t.name = ${tag}
        WHERE p.country_code = ${countryCode} AND t.name = ${tag}
        GROUP BY p.id
        ORDER BY score DESC
        OFFSET ${(page - 1) * limit}
        LIMIT ${limit};
      `;
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

      if (tag === "All") {
        places = await prisma.$queryRaw`
        SELECT 
          p.id,
          p.place_id,
          p.name,
          p.pfp,
          p.category,
          p.address,
          p.city,
          p.lat,
          p.lng,
          p.country,
          p.country_code,
          p.phone,
          p.website,
          p.maps_url,
          p.review_value,
          p.review_amount,
          p.total_up_votes,
          p.total_down_votes,
          p.added_by_id,
          (p.total_up_votes - p.total_down_votes) AS score,
          COALESCE(
            json_agg(
              DISTINCT jsonb_build_object(
                'place_id', pt.place_id,
                'tag_id', pt.tag_id,
                'up_votes', pt.up_votes,
                'down_votes', pt.down_votes,
                'tag_name', t.name
              )
            ) FILTER (WHERE t.id IS NOT NULL),
          '[]'
          ) AS tags
        FROM "Places" AS p
        LEFT JOIN "PlaceTags" AS pt ON pt.place_id = p.id
        LEFT JOIN "Tags" AS t ON t.id = pt.tag_id
        WHERE p.country_code = ${countryCode} AND ST_DWithin(
          p.geom::geography,
          ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography,
          50000
        )
        GROUP BY p.id
        ORDER BY score DESC
        OFFSET ${(page - 1) * limit}
        LIMIT ${limit};
      `;
      } else {
        places = await prisma.$queryRaw`
        SELECT 
          p.id,
          p.place_id,
          p.name,
          p.pfp,
          p.category,
          p.address,
          p.city,
          p.lat,
          p.lng,
          p.country,
          p.country_code,
          p.phone,
          p.website,
          p.maps_url,
          p.review_value,
          p.review_amount,
          p.total_up_votes,
          p.total_down_votes,
          p.added_by_id,
          (p.total_up_votes - p.total_down_votes) AS score,
          COALESCE(
            json_agg(
              DISTINCT jsonb_build_object(
                'place_id', pt.place_id,
                'tag_id', pt.tag_id,
                'up_votes', pt.up_votes,
                'down_votes', pt.down_votes,
                'tag_name', t.name
              )
            ) FILTER (WHERE t.id IS NOT NULL),
          '[]'
          ) AS tags
        FROM "Places" AS p
        LEFT JOIN "PlaceTags" AS pt ON pt.place_id = p.id
        LEFT JOIN "Tags" AS t ON t.id = pt.tag_id AND t.name = ${tag}
        WHERE p.country_code = ${countryCode} AND ST_DWithin(
          p.geom::geography,
          ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography,
          50000
        ) AND t.name = ${tag}
        GROUP BY p.id
        ORDER BY score DESC
        OFFSET ${(page - 1) * limit}
        LIMIT ${limit};
      `;
      }
    } else {
      throw new ApiError("Invalid Fetch type.", 400);
    }

    if (!places) {
      throw new ApiError("Unkown Error", 400);
    }

    console.log(places);

    // Success Response
    return NextResponse.json<ApiResponse<PlacesResponse[]>>({
      success: true,
      data: places,
      message: "Successfully fetched places.",
    });
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
