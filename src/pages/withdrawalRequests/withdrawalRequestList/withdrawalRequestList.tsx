import type { FC } from "react";
import {
  DataTable,
  FunctionField,
  List,
  ReferenceField,
  SelectField,
  TextField,
} from "react-admin";

import { USERS_FIELDS_LABELS } from "@/pages/users/const";

import {
  WITHDRAWAL_REQUESTS_FIELDS_LABELS,
  withdrawalRequestChoices,
  withdrawalRequestTypeChoices,
} from "../const";

import { WithdrawalRequestFilter } from "./ui/withdrawalRequestFilter/withdrawalRequestFilter";
import { CommonToolbar } from "@/features/commonToolbar";

export const WithdrawalRequestList: FC = ({ ...props }) => {
  return (
    <List
      {...props}
      filters={WithdrawalRequestFilter}
      actions={<CommonToolbar haveFilters />}
    >
      <DataTable bulkActionButtons={false}>
        <DataTable.Col source="id" disableSort />
        <DataTable.Col
          source="userId"
          disableSort
          label={USERS_FIELDS_LABELS.USERNAME}
        >
          <ReferenceField source="userId" reference="users">
            <FunctionField
              render={(record) =>
                record.username ? `@${record.username}` : `${record.tgId}`
              }
            />
          </ReferenceField>
        </DataTable.Col>
        <DataTable.Col
          source="gameUserId"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.GAME_USER_ID}
          disableSort
        />
        <DataTable.Col
          source="amount"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.AMOUNT}
          disableSort
        />
        <DataTable.Col
          source="status"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.STATUS}
          disableSort
        >
          <SelectField source="status" choices={withdrawalRequestChoices} />
        </DataTable.Col>
        <DataTable.Col
          source="type"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.TYPE}
          disableSort
        >
          <SelectField source="type" choices={withdrawalRequestTypeChoices} />
        </DataTable.Col>
        <DataTable.Col
          source="takenByAdminId"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.TAKEN_BY_ADMIN_ID}
          disableSort
        >
          <ReferenceField source="takenByAdminId" reference="admins">
            <TextField source="username" />
          </ReferenceField>
        </DataTable.Col>
      </DataTable>
    </List>
  );
};
