import type { FC } from "react";
import { DataTable, List, ReferenceField, TextField } from "react-admin";

import { PurchaseFilter } from "./ui/purchaseFilter/purchaseFilter";
import { CommonToolbar } from "@/features/commonToolbar";
import { UsernameOrId } from "@/widgets/usernameOrId/usernameOrId";

export const PurchaseList: FC = ({ ...props }) => {
  return (
    <List
      {...props}
      filters={PurchaseFilter}
      actions={<CommonToolbar haveFilters />}
    >
      <DataTable bulkActionButtons={false}>
        <DataTable.Col source="id" disableSort />
        <DataTable.Col source="marketCell.itemViewId" disableSort>
          <ReferenceField source="marketCell.itemViewId" reference="item-views">
            <TextField source="name" />
          </ReferenceField>
        </DataTable.Col>
        <DataTable.Col source="marketCellId" disableSort>
          <ReferenceField source="marketCellId" reference="market-cells">
            <TextField source="id" />
          </ReferenceField>
        </DataTable.Col>
        <DataTable.Col source="userId" disableSort>
          <UsernameOrId />
        </DataTable.Col>
      </DataTable>
    </List>
  );
};
