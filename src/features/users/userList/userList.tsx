import type { FC } from "react";
import { DataTable, List } from "react-admin";

import { globalExporter } from "@/model/utils/globalExporter";

import { USERS_FIELDS_LABELS } from "../const";

import { UserFilter } from "./ui/userFilter/userFilter";

export const UserList: FC = ({ ...props }) => {
  return (
    <List {...props} filters={<UserFilter />} exporter={globalExporter}>
      <DataTable bulkActionButtons={false}>
        <DataTable.Col source="id" disableSort />
        <DataTable.Col
          source="tgId"
          disableSort
          label={USERS_FIELDS_LABELS.TG_ID}
        />
        <DataTable.Col
          source="username"
          label={USERS_FIELDS_LABELS.USERNAME}
          disableSort
        />
        <DataTable.Col
          source="balance"
          label={USERS_FIELDS_LABELS.BALANCE}
          disableSort
        />
        <DataTable.Col
          source="totalDeposited"
          label={USERS_FIELDS_LABELS.TOTAL_DEPOSITED}
          disableSort
        />
        <DataTable.Col
          source="totalWagered"
          label={USERS_FIELDS_LABELS.TOTAL_WAGERED}
          disableSort
        />
        <DataTable.Col
          source="totalWinAmount"
          label={USERS_FIELDS_LABELS.TOTAL_WIN_AMOUNT}
          disableSort
        />
        <DataTable.Col
          source="gamesCount"
          label={USERS_FIELDS_LABELS.GAMES_COUNT}
          disableSort
        />

        <DataTable.Col
          source="referralCode"
          label={USERS_FIELDS_LABELS.REFERRAL_CODE}
          disableSort
        />
        <DataTable.Col
          source="referredByCode"
          label={USERS_FIELDS_LABELS.REFERRED_BY_CODE}
          disableSort
        />
      </DataTable>
    </List>
  );
};
