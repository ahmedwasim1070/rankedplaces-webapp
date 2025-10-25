//
export type PlacesResponse = {
  id: number;
  place_id: string;
  name: string;
  pfp: string | null;
  category: string | null;
  address: string | null;
  city: string | null;
  lat: number | null;
  lng: number | null;
  country: string | null;
  country_code: string | null;
  phone: string | null;
  website: string | null;
  maps_url: string | null;
  review_value: number | null;
  review_amount: number | null;
  total_up_votes: number;
  total_down_votes: number;
  added_by_id: string | null;
  score: number;
  tags: {
    place_tag_id: number;
    place_id: number;
    tag_id: number;
    up_votes: number;
    down_votes: number;
    tag_name: string;
  }[];
};
