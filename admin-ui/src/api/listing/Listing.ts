import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Whistlist } from "../whistlist/Whistlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photo: JsonValue;
  placeAmenities: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  whistlists?: Array<Whistlist>;
};
