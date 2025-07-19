import type { FC } from "react";
import {
  DataTable,
  FunctionField,
  List,
  ReferenceField,
  SelectField,
  TextField,
} from "react-admin";

import { globalExporter } from "@/model/utils/globalExporter";

import {
  WITHDRAWAL_REQUESTS_FIELDS_LABELS,
  withdrawalRequestChoices,
} from "../const";

import { WithdrawalRequestFilter } from "./ui/withdrawalRequestFilter/withdrawalRequestFilter";
import { USERS_FIELDS_LABELS } from "@/features/users/const";

export const WithdrawalRequestList: FC = ({ ...props }) => {
  return (
    <List
      {...props}
      filters={<WithdrawalRequestFilter />}
      exporter={globalExporter}
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
