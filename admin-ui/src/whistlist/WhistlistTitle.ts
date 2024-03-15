import { Whistlist as TWhistlist } from "../api/whistlist/Whistlist";

export const WHISTLIST_TITLE_FIELD = "id";

export const WhistlistTitle = (record: TWhistlist): string => {
  return record.id?.toString() || String(record.id);
};
