import type { FC } from "react";
import {
  Edit,
  ImageField,
  ImageInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

import { BASE_API_URL } from "@/model/consts/common";

import { ITEM_VIEW_FIELDS_lABELS, itemViewTypeChoices } from "../const";

import { EditToolBarWithoutDelete } from "@/features/editToolBarWithoutDelete/editToolBarWithoutDelete";

export const ItemViewEdit: FC = () => {
  // const { data: itemViews, isLoading } = useGetList("item-views", {
  //   pagination: { page: 1, perPage: 100 },
  //   sort: { field: "name", order: "ASC" },
  // });

  // const itemChoices =
  //   itemViews?.map((item) => ({ id: item.id, name: item.name })) || [];

  return (
    <Edit
      transform={(data) => {
        const transformed: Record<string, any> = {
          name: data.name,
          description: data.description,
          type: data.type,
        };
        if (data.imgUrl?.rawFile instanceof File) {
          transformed.img = data.imgUrl;
        }
        // if (data.type === ITEM_TYPE.CASE) {
        //   transformed.attributes = {
        //     itemsWithChances: data.attributes.itemsWithChances,
        //   };
        // }

        return transformed;
      }}
    >
      <SimpleForm toolbar={<EditToolBarWithoutDelete />}>
        <TextInput
          source="name"
          label={ITEM_VIEW_FIELDS_lABELS.NAME}
          validate={required()}
        />
        <TextInput
          source="description"
          label={ITEM_VIEW_FIELDS_lABELS.DESCRIPTION}
          validate={required()}
        />

        <SelectInput
          source="type"
          choices={itemViewTypeChoices}
          label={ITEM_VIEW_FIELDS_lABELS.TYPE}
          validate={required()}
        />

        <ImageInput
          source="imgUrl"
          label={ITEM_VIEW_FIELDS_lABELS.IMG}
          accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
          parse={(value) => {
            //если редактируется фотка
            if (value instanceof File) {
              return {
                src: URL.createObjectURL(value),
                rawFile: value,
                title: value.name,
              };
            }

            return value;
          }}
          format={(value) => {
            //инициализация фотки
            if (typeof value === "string") {
              const fullUrl = `${BASE_API_URL}${value}`;

              return {
                src: fullUrl,
                title: "Изображение",
              };
            }

            return value;
          }}
        >
          <ImageField source="src" title="title" />
        </ImageInput>

        {/* <FormDataConsumer>
          {({ formData }) =>
            formData.type === ITEM_TYPE.CASE && (
              <ArrayInput
                source="attributes.itemsWithChances"
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
                    source="chance"
                    label={ITEM_VIEW_FIELDS_lABELS.CHANCE}
                    type="number"
                    validate={required("Шанс обязателен")}
                  />
                </SimpleFormIterator>
              </ArrayInput>
            )
          }
        </FormDataConsumer> */}
      </SimpleForm>
    </Edit>
  );
};
