import type { FC } from "react";
import {
  AutocompleteInput,
  BooleanInput,
  Edit,
  FormDataConsumer,
  NumberInput,
  SelectInput,
  SimpleForm,
  maxValue,
  minValue,
  required,
  useGetList,
} from "react-admin";

import { MARKET_CELL_FIELDS_lABELS, marketCellTagsChoices } from "../const";

import { MARKET_CELL_TAGS } from "@/entities/marketCell/model/type/marketCell.type";
import { EditToolBarWithoutDelete } from "@/features/editToolBarWithoutDelete/editToolBarWithoutDelete";

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
        tag: data.tag,
        discountPercentage: data.discountPercentage,
      })}
    >
      <SimpleForm toolbar={<EditToolBarWithoutDelete />}>
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

        <SelectInput
          source="tag"
          choices={marketCellTagsChoices}
          label={MARKET_CELL_FIELDS_lABELS.TAG}
        />
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData?.tag === MARKET_CELL_TAGS.DISCOUNT && (
              <NumberInput
                source="discountPercentage"
                min={0}
                max={100}
                label={MARKET_CELL_FIELDS_lABELS.DISCOUNT_PERCENTAGE}
                validate={[required(), minValue(0), maxValue(100)]}
                {...rest}
              />
            )
          }
        </FormDataConsumer>
        <BooleanInput
          source="isPurchasable"
          label={MARKET_CELL_FIELDS_lABELS.IS_PURCHASABLE}
        />
      </SimpleForm>
    </Edit>
  );
};
