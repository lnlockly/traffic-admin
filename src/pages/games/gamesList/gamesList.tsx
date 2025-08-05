import type { FC } from "react";
import { DataTable, List } from "react-admin";

import { USERS_FIELDS_LABELS } from "@/pages/users/const";

import { GAMES_FIELDS_LABELS } from "../const";

import { GamesFilter } from "./ui/gamesFilter/gamesFilter";
import { CommonToolbar } from "@/features/commonToolbar";
import { UsernameOrId } from "@/widgets/usernameOrId/usernameOrId";

export const GamesList: FC = ({ ...props }) => {
  return (
    <List
      {...props}
      filters={GamesFilter}
      actions={<CommonToolbar haveFilters />}
      sort={{ field: "createdAt", order: "DESC" }}
    >
      <DataTable bulkActionButtons={false}>
        <DataTable.Col source="id" disableSort />

        <DataTable.Col
          source="userId"
          disableSort
          label={USERS_FIELDS_LABELS.USERNAME}
        >
          <UsernameOrId />
        </DataTable.Col>

        <DataTable.Col
          source="amount"
          label={GAMES_FIELDS_LABELS.AMOUNT}
          disableSort
        />
        <DataTable.Col
          source="multiplier"
          label={GAMES_FIELDS_LABELS.AMOUNT}
          disableSort
        />
        <DataTable.Col
          source="result"
          label={GAMES_FIELDS_LABELS.CREATED_AT}
          disableSort
        />
        <DataTable.Col source="createdAt" label={GAMES_FIELDS_LABELS.AMOUNT} />
      </DataTable>
    </List>
  );
};
