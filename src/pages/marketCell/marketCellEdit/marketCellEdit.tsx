import type { FC } from "react";
import {
  AutocompleteInput,
  BooleanInput,
  Edit,
  NumberInput,
  SimpleForm,
  required,
  useGetList,
} from "react-admin";

import { MARKET_CELL_FIELDS_lABELS } from "../const";

export const MarketCellEdit: FC = () => {
  const { data: itemViews, isLoading } = useGetList("item-views", {
    pagination: { page: 1, perPage: 100 },
    sort: { field: "name", order: "ASC" },
  });

  // Формируем choices для AutocompleteInput
  const itemChoices =
    itemViews?.map((item) => ({ id: item.id, name: item.name })) || [];
  return (
    <Edit
      transform={(data) => ({
        itemViewId: data.itemViewId,
        price: data.price,
        initialSupply: data.initialSupply,
        itemsLeft: data.itemsLeft,
        isPurchasable: data.isPurchasable,
      })}
    >
      <SimpleForm>
        <AutocompleteInput
          source="itemViewId"
          label={MARKET_CELL_FIELDS_lABELS.ITEM}
          choices={itemChoices}
          optionText="name"
          optionValue="id"
          isLoading={isLoading}
          validate={required("Предмет обязателен")}
        />
        <NumberInput
          required
          source="price"
          label={MARKET_CELL_FIELDS_lABELS.PRICE}
          min={0}
        />
        <NumberInput
          required
          source="initialSupply"
          label={MARKET_CELL_FIELDS_lABELS.INITIAL_SUPPLY}
          min={0}
        />
        <NumberInput
          required
          source="itemsLeft"
          min={0}
          label={MARKET_CELL_FIELDS_lABELS.ITEMS_LEFT}
        />
        <BooleanInput
          source="isPurchasable"
          label={MARKET_CELL_FIELDS_lABELS.IS_PURCHASABLE}
        />
      </SimpleForm>
    </Edit>
  );
};
