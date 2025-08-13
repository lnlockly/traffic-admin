import {
  ITEM_RARITY,
  ITEM_TYPE,
} from "@/entities/itemView/model/type/itemView.type";

export const itemViewTypeChoices = [
  { id: ITEM_TYPE.CASE, name: "Кейс" },
  { id: ITEM_TYPE.SKIN, name: "Скин" },
];

export const itemViewRarityChoices = [
  { id: ITEM_RARITY.COMMON, name: "Обычный" },
  { id: ITEM_RARITY.UNCOMMON, name: "Необычный" },
  { id: ITEM_RARITY.RARE, name: "Редкий" },
  { id: ITEM_RARITY.EPIC, name: "Эпический" },
  { id: ITEM_RARITY.LEGENDARY, name: "Легендарный" },
  { id: ITEM_RARITY.ARCANE, name: "Таинственный" },
  { id: ITEM_RARITY.NAMELESS, name: "Безымянный" },
];

export const ITEM_VIEW_FIELDS_lABELS = {
  NAME: "Название",
  DESCRIPTION: "Описание",
  TYPE: "Тип",
  RARITY: "Редкость",
  IMG: "Изображение",
  ATTRIBUTES: "Аттрибуты",
  CASE_ITEMS: "Содержимое кейса",
  ITEM_VIEW: "Предмет",
  CHANCE: "Шанс",
};
