import type { FC } from "react";
import { Filter, SelectInput, TextInput } from "react-admin";

import { USERS_FIELDS_LABELS } from "@/features/users/const";
import {
  WITHDRAWAL_REQUESTS_FIELDS_LABELS,
  withdrawalRequestChoices,
} from "@/features/withdrawalRequests/const";

export const WithdrawalRequestFilter: FC = ({ ...props }) => {
  return (
    <Filter {...props}>
      <TextInput source="id" label="id вывода" />
      <TextInput source="tgId" label={USERS_FIELDS_LABELS.TG_ID} />
      <TextInput source="username" label={USERS_FIELDS_LABELS.USERNAME} />
      <SelectInput
        source="status"
        choices={withdrawalRequestChoices}
        label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.STATUS}
        emptyValue={""}
        emptyText={"Все"}
      />
    </Filter>
  );
};
