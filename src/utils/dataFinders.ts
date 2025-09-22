// Imports
import { AddressComponent } from "@/types";

// Get Address
export const getAddressComponent = (
  components: AddressComponent[],
  type: string
) => {
  return components.find((c) => c.types.includes(type)) || null;
};
