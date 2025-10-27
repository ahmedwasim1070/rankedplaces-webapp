// Geonames response
export type GeoNamesCity = {
  name: string;
  lat: string;
  lng: string;
  [key: string]: unknown;
};

// api-coutnries response
export type ApiCountries = {
  name: string;
  alpha2Code: string;
  capital: string;
  [key: string]: unknown;
};
