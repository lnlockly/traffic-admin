import { ITEM_TYPE } from "@/entities/itemView/model/type/itemView.type";

export const itemViewTypeChoices = [
  { id: ITEM_TYPE.CASE, name: "Кейс" },
  { id: ITEM_TYPE.SKIN, name: "Скин" },
];

export const ITEM_VIEW_FIELDS_lABELS = {
  NAME: "Название",
  DESCRIPTION: "Описание",
  TYPE: "Тип",
  IMG: "Изображение",
  ATTRIBUTES: "Аттрибуты",
  CASE_ITEMS: "Содержимое кейса",
  ITEM_VIEW: "Предмет",
  CHANCE: "Шанс в %",
};
