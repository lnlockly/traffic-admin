import { NumberInput, TextInput } from "react-admin";

import { PURCHASE_FIELDS_lABELS } from "@/pages/purchase/const";
import { USERS_FIELDS_LABELS } from "@/pages/users/const";

export const PurchaseFilter = [
  <NumberInput source="id" label="id" />,
  <TextInput source="itemName" label={PURCHASE_FIELDS_lABELS.ITEM} />,
  <NumberInput
    source="marketCellId"
    label={PURCHASE_FIELDS_lABELS.MARKET_CELL_ID}
  />,
  // <TextInput source="tgId" label={USERS_FIELDS_LABELS.TG_ID} />,
  <TextInput source="username" label={USERS_FIELDS_LABELS.USERNAME} />,
];
