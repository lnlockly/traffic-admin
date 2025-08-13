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

import {
  ITEM_VIEW_FIELDS_lABELS,
  itemViewRarityChoices,
  itemViewTypeChoices,
} from "../const";
import { SelectCaseItems } from "../ui/selectCaseItems/selectCaseItems";

export const ItemViewCreate: FC = ({ ...props }) => {
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
        <SelectInput
          required
          source="rarity"
          choices={itemViewRarityChoices}
          label={ITEM_VIEW_FIELDS_lABELS.RARITY}
          defaultValue={itemViewRarityChoices[0].id}
        />
        <ImageInput
          source="img"
          label="Фото"
          accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
          validate={required("Фото обязательно")}
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <SelectCaseItems source="itemsWithChances" />
      </SimpleForm>
    </Create>
  );
};
