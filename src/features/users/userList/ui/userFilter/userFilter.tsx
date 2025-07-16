import type { FC } from "react";
import { Filter, TextInput } from "react-admin";

import { USERS_FIELDS_LABELS } from "@/features/users/const";

export const UserFilter: FC = ({ ...props }) => {
  return (
    <Filter {...props}>
      <TextInput source="id" label="id" />
      <TextInput source="tgId" label={USERS_FIELDS_LABELS.TG_ID} />
      <TextInput source="username" label={USERS_FIELDS_LABELS.USERNAME} />
    </Filter>
  );
};
