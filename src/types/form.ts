// Imports
import { PlaceDetailsByGoogle } from "./api";

// Tag Form Data
export type TagFormData = {
  phrase: string;
  keyword: string;
};
// Tag Form Error
export type TagFormError = {
  phrase: string | null;
  keyword: string | null;
};
// AddPlace Form Data
export type AddPlaceForm = {
  placeByGoogle: PlaceDetailsByGoogle;
  userAddedTags: string[];
};
