import type { FC } from "react";
import { BooleanField, DataTable, List } from "react-admin";

import { globalExporter } from "@/model/utils/globalExporter";

import { TASK_FIELDS_lABELS } from "../const";

export const TaskList: FC = ({ ...props }) => {
  return (
    <List {...props} exporter={globalExporter}>
      <DataTable bulkActionButtons={false}>
        <DataTable.Col source="id" disableSort />
        <DataTable.Col
          source="chatId"
          label={TASK_FIELDS_lABELS.CHAT_ID}
          disableSort
        />
        <DataTable.Col
          source="reward"
          label={TASK_FIELDS_lABELS.REWARD}
          disableSort
        />
        <DataTable.Col
          source="checkAfterHours"
          label={TASK_FIELDS_lABELS.CHECK_AFTER_HOURS}
          disableSort
        />
        <DataTable.Col
          source="isActive"
          label={TASK_FIELDS_lABELS.IS_ACTIVE}
          disableSort
        >
          <BooleanField source="isActive" />
        </DataTable.Col>
      </DataTable>
    </List>
  );
};
