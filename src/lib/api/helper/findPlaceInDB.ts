// Imports
import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma/prisma";

//
const COORD_TOLERANCE = 0.0001;

type PlacesAndTags = Prisma.PlacesGetPayload<{
  include: {
    place_tags: {
      include: {
        tag: true;
      };
    };
  };
}>;

// Types
type FindPlaceInDb = (
  placeId: string,
  lat: number,
  lng: number,
  address: string
) => Promise<PlacesAndTags | null>;

//
export const findPlaceInDb: FindPlaceInDb = async (
  placeId,
  lat,
  lng,
  address
) => {
  let place = await prisma.places.findUnique({
    where: { place_id: placeId },
    include: {
      place_tags: {
        include: {
          tag: true,
        },
      },
    },
  });

  if (place) return place;

  place = await prisma.places.findFirst({
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
      place_tags: {
        include: {
          tag: true,
        },
      },
    },
  });

  if (place) return place;
  else return null;
};
