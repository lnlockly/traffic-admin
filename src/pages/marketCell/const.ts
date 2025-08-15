import { MARKET_CELL_TAGS } from "@/entities/marketCell/model/type/marketCell.type";

export const marketCellTagsChoices = [
  { id: MARKET_CELL_TAGS.DISCOUNT, name: "Скидка" },
  { id: MARKET_CELL_TAGS.NEW, name: "Новый" },
  { id: MARKET_CELL_TAGS.TOP, name: "Топ" },
];
export const MARKET_CELL_FIELDS_lABELS = {
  ITEM: "Предмет",
  PRICE: "Цена",
  INITIAL_SUPPLY: "Изначальное количество",
  TAG: "Тег",
  DISCOUNT_PERCENTAGE: "Процент скидки в %",
  ITEMS_LEFT: "Осталось",
  IS_PURCHASABLE: "Можно купить?",
};
