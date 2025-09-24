// Imports
import { PlacesAndTags } from "@/types";
import { Prisma } from "@prisma/client";

//
const COORD_TOLERANCE = 0.0001;

// Types
type FindPlaceInDb = (
  tx: Prisma.TransactionClient,
  placeId: string,
  lat: number,
  lng: number,
  address: string
) => Promise<PlacesAndTags | null>;

//
export const findPlaceInDb: FindPlaceInDb = async (
  tx,
  placeId,
  lat,
  lng,
  address
) => {
  let place = await tx.places.findUnique({
    where: { place_id: placeId },
    include: {
      place_tag: {
        include: {
          tag: true,
        },
      },
    },
  });

  if (place) return place;

  place = await tx.places.findFirst({
    where: {
      AND: [
        { address: { equals: address, mode: "insensitive" } },
        {
          lat: {
            gte: lat - COORD_TOLERANCE,
            lte: lat + COORD_TOLERANCE,
          },
          lng: {
            gte: lng - COORD_TOLERANCE,
            lte: lng + COORD_TOLERANCE,
          },
        },
      ],
    },
    include: {
      place_tag: {
        include: {
          tag: true,
        },
      },
    },
  });

  if (place) return place;
  else return null;
};
