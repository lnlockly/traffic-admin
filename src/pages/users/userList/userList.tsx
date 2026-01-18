import type { FC } from "react";
import { BooleanField, DataTable, List } from "react-admin";

import { USERS_FIELDS_LABELS } from "../const";

import { UserFilter } from "./ui/userFilter/userFilter";
import { CommonToolbar } from "@/features/commonToolbar";

export const UserList: FC = ({ ...props }) => {
  return (
    <List
      {...props}
      filters={UserFilter}
      actions={<CommonToolbar haveFilters />}
    >
      <DataTable bulkActionButtons={false}>
        <DataTable.Col
          source="username"
          label={USERS_FIELDS_LABELS.USERNAME}
          disableSort
        />
        <DataTable.Col
          source="email"
          label={USERS_FIELDS_LABELS.EMAIL}
          disableSort
        />
        <DataTable.Col
          source="accumulatedBalance"
          label={USERS_FIELDS_LABELS.ACCUMULATED_BALANCE}
          disableSort
        />
        <DataTable.Col
          source="subscriptionIsActive"
          label={USERS_FIELDS_LABELS.SUBSCRIPTION_IS_ACTIVE}
        >
          <BooleanField source="subscriptionIsActive" />
        </DataTable.Col>

        <DataTable.Col
          source="subscription"
          label={USERS_FIELDS_LABELS.SUBSCRIPTION}
        />
        <DataTable.Col
          source="createdAt"
          label={USERS_FIELDS_LABELS.CREATED_AT}
        />
      </DataTable>
    </List>
  );
};
