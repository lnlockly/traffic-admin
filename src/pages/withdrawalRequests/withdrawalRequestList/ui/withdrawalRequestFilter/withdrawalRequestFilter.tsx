import { SelectInput, TextInput } from "react-admin";

import { USERS_FIELDS_LABELS } from "@/pages/users/const";
import {
  WITHDRAWAL_REQUESTS_FIELDS_LABELS,
  withdrawalRequestChoices,
} from "@/pages/withdrawalRequests/const";

export const WithdrawalRequestFilter = [
  <TextInput source="id" label="id вывода" />,

  <TextInput source="username" label={USERS_FIELDS_LABELS.USERNAME} />,
  <SelectInput
    source="status"
    choices={withdrawalRequestChoices}
    label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.STATUS}
    emptyValue={""}
    emptyText={"Все"}
  />,
];
