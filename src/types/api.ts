// Imports
import { PlacesAndTags } from "./prisma";

// Api response type
export type ApiResponse<T> =
  | { success: true; data: T; message: string }
  | { success: false; message: string };

// City response type
export type CitiesResponse = {
  name: string;
  lat: number;
  lng: number;
};

// Country response type
export type CountryResponse = {
  country: string;
  countryCode: string;
  capital: string;
};

// Response of fetch/ip-geo-data
export type IpGeoDataResponse = {
  country: string;
  countryCode: string;
};

// Response of fetch/lat-n-lng-data
export type LatNLngDataResponse = {
  country: string;
  countryCode: string;
  city: string;
  lat: number;
  lng: number;
};

// Response of fetch/capital
export type CapitalReponse = {
  city: string;
  lat: number;
  lng: number;
};

// Response of fetch/place-suggestion
interface MatchedSubstring {
  length: number;
  offset: number;
}
interface Term {
  offset: number;
  value: string;
}
interface StructuredFormatting {
  main_text: string;
  main_text_matched_substrings: MatchedSubstring[];
  secondary_text: string;
}
export type PlaceSuggestionResponse = {
  description: string;
  matched_substrings: MatchedSubstring[];
  place_id: string;
  reference: string;
  structured_formatting: StructuredFormatting;
  terms: Term[];
  types: string[];
};

// Response of fetch/place-details
// Address Component
export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}
// Location (lat/lng)
interface LatLngLiteral {
  lat: number;
  lng: number;
}
// Viewport
interface Viewport {
  northeast: LatLngLiteral;
  southwest: LatLngLiteral;
}
// Geometry
interface Geometry {
  location: LatLngLiteral;
  viewport: Viewport;
}
// Plus Code
interface PlusCode {
  compound_code: string;
  global_code: string;
}
// Photo
interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}
// Opening Hours
interface PeriodDetail {
  day: number;
  time: string;
}
interface Period {
  open: PeriodDetail;
  close?: PeriodDetail;
}
interface OpeningHours {
  open_now: boolean;
  periods: Period[];
  weekday_text: string[];
}
// Review
interface Review {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}
// Main Place Result
export interface PlaceDetailsByGoogle {
  address_components: AddressComponent[];
  adr_address: string;
  business_status: string;
  curbside_pickup?: boolean;
  current_opening_hours?: OpeningHours;
  delivery?: boolean;
  dine_in?: boolean;
  formatted_address: string;
  formatted_phone_number?: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  international_phone_number?: string;
  website?: string;
  name: string;
  opening_hours?: OpeningHours;
  photos?: Photo[];
  place_id: string;
  plus_code?: PlusCode;
  rating?: number;
  reference: string;
  reviews?: Review[];
  serves_breakfast?: boolean;
  serves_brunch?: boolean;
  serves_dinner?: boolean;
  takeout?: boolean;
  types: string[];
  url?: string;
  user_ratings_total?: number;
  utc_offset?: number;
  vicinity?: string;
}
export interface PlaceDetailsResponse {
  googleData: PlaceDetailsByGoogle;
  dbData: PlacesAndTags | null;
}
