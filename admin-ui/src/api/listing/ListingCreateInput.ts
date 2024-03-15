import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { WhistlistCreateNestedManyWithoutListingsInput } from "./WhistlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description: string;
  listingCreatedBy: UserWhereUniqueInput;
  locationData?: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photo: InputJsonValue;
  placeAmenities: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
  price: number;
  title: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  whistlists?: WhistlistCreateNestedManyWithoutListingsInput;
};
