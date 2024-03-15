import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhistlistUpdateInput = {
  listing?: ListingWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
