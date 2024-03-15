import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhistlistCreateInput = {
  listing?: ListingWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
