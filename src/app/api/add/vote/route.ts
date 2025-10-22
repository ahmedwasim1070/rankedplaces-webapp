// Imports
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import { AddVoteForm, AddVoteResponse, ApiResponse } from "@/types";
import { sanitizeString } from "@/utils";
import { prisma } from "@/lib/prisma/prisma";

//
export async function POST(request: NextRequest) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const uniqueId = token?.unique_id;
    if (!uniqueId) {
      throw new ApiError("No user found.", 401);
    }

    const body: AddVoteForm = await request.json();
    const { placeId, tag, voteType } = body;

    if (voteType !== "UP" && voteType !== "DOWN") {
      throw new ApiError("Vote type is invalid.", 400);
    }

    const sanitizeTag = sanitizeString(tag, 30);
    const sanitizePlaceId = sanitizeString(placeId, 50);

    const result: AddVoteResponse = await prisma.$transaction(async (tx) => {
      const userNDataInDb = await tx.users.findUnique({
        where: {
          unique_id: uniqueId,
        },
        include: {
          votes: true,
        },
      });
      if (!userNDataInDb) throw new ApiError("User not found ", 404);

      const tagInDb = await tx.tags.findUnique({
        where: {
          name: sanitizeTag,
        },
      });
      if (!tagInDb) throw new ApiError("Tag does not exists in DB", 404);

      const placeInDb = await tx.places.findUnique({
        where: {
          place_id: sanitizePlaceId,
        },
      });
      if (!placeInDb) throw new ApiError("Place does not exists in DB", 404);

      const placeTagInDb = await tx.placeTags.findUnique({
        where: {
          place_id_tag_id: {
            place_id: placeInDb.id,
            tag_id: tagInDb.id,
          },
        },
      });
      if (!placeTagInDb) throw new ApiError("Place is not added with Tag", 404);

      const exisistingVote = await tx.votes.findUnique({
        where: {
          voted_by_id_place_tag_id: {
            voted_by_id: userNDataInDb.id,
            place_tag_id: placeTagInDb.id,
          },
        },
      });
      if (exisistingVote) {
        // If vote is same undo
        if (exisistingVote.vote_type === voteType) {
          await tx.votes.delete({
            where: {
              voted_by_id_place_tag_id: {
                place_tag_id: placeTagInDb.id,
                voted_by_id: userNDataInDb.id,
              },
            },
          });

          const updatePayload =
            voteType === "UP"
              ? { up_votes: { decrement: 1 } }
              : { down_votes: { decrement: 1 } };
          const updated = await tx.placeTags.update({
            where: {
              place_id_tag_id: {
                place_id: placeInDb.id,
                tag_id: tagInDb.id,
              },
            },
            data: updatePayload,
          });
          // If vote is different change
        } else if (exisistingVote.vote_type !== voteType) {
          await tx.votes.update({
            where: {
              voted_by_id_place_tag_id: {
                place_tag_id: placeTagInDb.id,
                voted_by_id: userNDataInDb.id,
              },
            },
            data: {
              vote_type: voteType,
            },
          });

          const updatePayload =
            voteType === "UP"
              ? { up_votes: { increment: 1 }, down_votes: {} }
              : { down_votes: { increment: 1 } };
          const updated = await tx.placeTags.update({
            where: {
              place_id_tag_id: {
                place_id: placeInDb.id,
                tag_id: tagInDb.id,
              },
            },
            data: updatePayload,
          });
        }
        // If vote does not exists create
      } else {
        await tx.votes.create({
          data: {
            voted_by_id: userNDataInDb.id,
            place_tag_id: placeTagInDb.id,
            vote_type: voteType,
          },
        });

        const updatePayload =
          voteType === "UP"
            ? { up_votes: { increment: 1 } }
            : { down_votes: { increment: 1 } };
        const updated = await tx.placeTags.update({
          where: {
            place_id_tag_id: {
              place_id: placeInDb.id,
              tag_id: tagInDb.id,
            },
          },
          data: updatePayload,
        });
      }

      return { updated, tag: tagInDb.name, place: placeInDb.name };
    });

    if (!result) {
      throw new ApiError("Failed to register vote.", 500);
    }

    //
    return NextResponse.json<ApiResponse<AddVoteResponse>>(
      {
        success: true,
        data: result,
        message: "Registered vote successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error("Error in /add/vote API:", {
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
