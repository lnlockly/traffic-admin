import type { FC } from "react";
import { DataTable, List, SelectField } from "react-admin";

import { ITEM_VIEW_FIELDS_lABELS, itemViewRarityChoices } from "../const";

import { CommonToolbar } from "@/features/commonToolbar";

export const ItemViewList: FC = ({ ...props }) => {
  return (
    <List {...props} actions={<CommonToolbar haveCreate />}>
      <DataTable bulkActionButtons={false}>
        <DataTable.Col source="id" disableSort />
        <DataTable.Col
          source="name"
          disableSort
          label={ITEM_VIEW_FIELDS_lABELS.NAME}
        />
        <DataTable.Col
          source="description"
          disableSort
          label={ITEM_VIEW_FIELDS_lABELS.DESCRIPTION}
        />
        <DataTable.Col
          source="rarity"
          disableSort
          label={ITEM_VIEW_FIELDS_lABELS.RARITY}
        >
          <SelectField source="rarity" choices={itemViewRarityChoices} />
        </DataTable.Col>
        <DataTable.Col
          source="type"
          disableSort
          label={ITEM_VIEW_FIELDS_lABELS.TYPE}
        />
      </DataTable>
    </List>
  );
};
