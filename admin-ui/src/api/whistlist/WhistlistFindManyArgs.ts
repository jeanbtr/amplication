import { WhistlistWhereInput } from "./WhistlistWhereInput";
import { WhistlistOrderByInput } from "./WhistlistOrderByInput";

export type WhistlistFindManyArgs = {
  where?: WhistlistWhereInput;
  orderBy?: Array<WhistlistOrderByInput>;
  skip?: number;
  take?: number;
};
