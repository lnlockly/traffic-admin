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

import {
  ITEM_VIEW_FIELDS_lABELS,
  itemViewRarityChoices,
  itemViewTypeChoices,
} from "../const";
import { SelectCaseItems } from "../ui/selectCaseItems/selectCaseItems";

import { ITEM_TYPE } from "@/entities/itemView/model/type/itemView.type";
import { EditToolBarWithoutDelete } from "@/features/editToolBarWithoutDelete/editToolBarWithoutDelete";

export const ItemViewEdit: FC = () => {
  return (
    <Edit
      transform={(data) => {
        const transformed: Record<string, any> = {
          name: data.name,
          description: data.description,
          type: data.type,
          rarity: data.rarity,
        };
        if (data.imgUrl?.rawFile instanceof File) {
          transformed.img = data.imgUrl;
        }
        if (data.type === ITEM_TYPE.CASE) {
          transformed.attributes = {
            itemsWithChances: data.attributes.itemsWithChances,
          };
        }

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
        <SelectInput
          required
          source="rarity"
          choices={itemViewRarityChoices}
          label={ITEM_VIEW_FIELDS_lABELS.RARITY}
          defaultValue={itemViewRarityChoices[0].id}
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
        <SelectCaseItems source="attributes.itemsWithChances" />
      </SimpleForm>
    </Edit>
  );
};
