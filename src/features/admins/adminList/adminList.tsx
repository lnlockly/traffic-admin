import type { FC } from "react";
import { DataTable, List } from "react-admin";

import { globalExporter } from "@/model/utils/globalExporter";

import { ADMIN_FIELDS_lABELS } from "../const";

export const AdminList: FC = ({ ...props }) => {
  return (
    <List {...props} exporter={globalExporter}>
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
