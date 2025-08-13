import { type FC } from "react";
import {
  ArrayInput,
  AutocompleteInput,
  FormDataConsumer,
  NumberInput,
  SimpleFormIterator,
  required,
  useGetList,
  useRecordContext,
} from "react-admin";

import { ITEM_VIEW_FIELDS_lABELS } from "../../const";

import { ITEM_TYPE } from "@/entities/itemView/model/type/itemView.type";

interface Props {
  source: string;
}

export const SelectCaseItems: FC<Props> = ({ source }) => {
  const record = useRecordContext();

  const { data: itemViews, isLoading } = useGetList("item-views", {
    pagination: { page: 1, perPage: 100 },
    sort: { field: "name", order: "ASC" },
  });

  const itemChoices =
    itemViews
      ?.map((item) => ({ id: item.id, name: item.name }))
      .filter((item) => item.id !== record?.id) || [];

  return (
    <FormDataConsumer>
      {({ formData }) =>
        formData.type === ITEM_TYPE.CASE && (
          <ArrayInput
            source={source}
            label={ITEM_VIEW_FIELDS_lABELS.CASE_ITEMS}
          >
            <SimpleFormIterator inline>
              <AutocompleteInput
                isRequired
                source="itemViewId"
                label={ITEM_VIEW_FIELDS_lABELS.ITEM_VIEW}
                choices={itemChoices}
                optionText="name"
                optionValue="id"
                isLoading={isLoading}
                validate={required("Предмет обязателен")}
              />
              <NumberInput
                required
                min={0}
                source="chance"
                label={ITEM_VIEW_FIELDS_lABELS.CHANCE}
                type="number"
              />
            </SimpleFormIterator>
          </ArrayInput>
        )
      }
    </FormDataConsumer>
  );
};
