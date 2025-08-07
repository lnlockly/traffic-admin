import type { FC } from "react";
import {
  Create,
  ImageField,
  ImageInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

import { ITEM_VIEW_FIELDS_lABELS, itemViewTypeChoices } from "../const";

export const ItemViewCreate: FC = ({ ...props }) => {
  // const { data: itemViews, isLoading } = useGetList("item-views", {
  //   pagination: { page: 1, perPage: 100 },
  //   sort: { field: "name", order: "ASC" },
  // });

  // const itemChoices =
  //   itemViews?.map((item) => ({ id: item.id, name: item.name })) || [];
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          required
          source="name"
          label={ITEM_VIEW_FIELDS_lABELS.NAME}
        />
        <TextInput
          required
          source="description"
          label={ITEM_VIEW_FIELDS_lABELS.DESCRIPTION}
        />

        <SelectInput
          required
          source="type"
          choices={itemViewTypeChoices}
          label={ITEM_VIEW_FIELDS_lABELS.TYPE}
          defaultValue={itemViewTypeChoices[0].id}
        />
        <ImageInput
          source="img"
          label="Фото"
          accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
          validate={required("Фото обязательно")}
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        {/* <FormDataConsumer>
          {({ formData }) =>
            formData.type === ITEM_TYPE.CASE && (
              <ArrayInput
                source="itemsWithChances"
                label={ITEM_VIEW_FIELDS_lABELS.CASE_ITEMS}
              >
                <SimpleFormIterator inline>
                  <AutocompleteInput
                    source="itemViewId"
                    label={ITEM_VIEW_FIELDS_lABELS.ITEM_VIEW}
                    choices={itemChoices}
                    optionText="name"
                    optionValue="id"
                    isLoading={isLoading}
                    validate={required("Предмет обязателен")}
                  />
                  <TextInput
                    required
                    source="chance"
                    label={ITEM_VIEW_FIELDS_lABELS.CHANCE}
                    type="number"
                  />
                </SimpleFormIterator>
              </ArrayInput>
            )
          }
        </FormDataConsumer> */}
      </SimpleForm>
    </Create>
  );
};
