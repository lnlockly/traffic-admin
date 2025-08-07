import type { FC } from "react";
import {
  BooleanField,
  DataTable,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

import { MARKET_CELL_FIELDS_lABELS } from "../const";

import { CommonToolbar } from "@/features/commonToolbar";

export const MarketCellList: FC = ({ ...props }) => {
  return (
    <List {...props} actions={<CommonToolbar haveCreate />}>
      <DataTable bulkActionButtons={false}>
        <DataTable.Col source="id" disableSort />
        <DataTable.Col
          source="itemViewId"
          disableSort
          label={MARKET_CELL_FIELDS_lABELS.ITEM}
        >
          <ReferenceField source="itemViewId" reference="item-views">
            <TextField source="name" />
          </ReferenceField>
        </DataTable.Col>
        <DataTable.Col
          source="price"
          disableSort
          label={MARKET_CELL_FIELDS_lABELS.PRICE}
        />
        <DataTable.Col
          source="itemsLeft"
          disableSort
          label={MARKET_CELL_FIELDS_lABELS.ITEMS_LEFT}
        />
        <DataTable.Col
          source="initialSupply"
          disableSort
          label={MARKET_CELL_FIELDS_lABELS.INITIAL_SUPPLY}
        />
        <DataTable.Col
          source="isPurchasable"
          disableSort
          label={MARKET_CELL_FIELDS_lABELS.IS_PURCHASABLE}
        >
          <BooleanField source="isPurchasable" />
        </DataTable.Col>
      </DataTable>
    </List>
  );
};
