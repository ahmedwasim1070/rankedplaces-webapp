// Imports
import { PlacesAndTags } from "@/types";
import { sanitizeString } from "@/utils";
import { Prisma } from "@prisma/client";
import { isValidLatnLng } from "../validators/validateLatnLng";

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
  const sanitizedPlaceId = sanitizeString(placeId, 100);
  if (!isValidLatnLng(lat, lng)) {
    return null;
  }
  const sanitizedAddress = sanitizeString(address, 500);

  let place = await tx.places.findUnique({
    where: { place_id: sanitizedPlaceId },
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
        { address: { equals: sanitizedAddress, mode: "insensitive" } },
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
