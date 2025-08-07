import type { FC } from "react";
import { DataTable, List } from "react-admin";

import { ADMIN_FIELDS_lABELS } from "../const";

import { CommonToolbar } from "@/features/commonToolbar";

export const AdminList: FC = ({ ...props }) => {
  return (
    <List {...props} actions={<CommonToolbar haveCreate />}>
      <DataTable bulkActionButtons={false}>
        <DataTable.Col source="id" disableSort />
        <DataTable.Col
          source="username"
          label={ADMIN_FIELDS_lABELS.USERNAME}
          disableSort
        />
        <DataTable.Col
          source="role"
          label={ADMIN_FIELDS_lABELS.ROLE}
          disableSort
        />
      </DataTable>
    </List>
  );
};
