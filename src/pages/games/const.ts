import { WITHDRAW_STATUS } from "@/entities/withdrawalRequest/model/types/withdrawalRequest.type";

export const withdrawalRequestChoices = [
  { id: WITHDRAW_STATUS.PENDING, name: "В ожидании" },
  { id: WITHDRAW_STATUS.IN_PROGRESS, name: "В работе" },
  { id: WITHDRAW_STATUS.CONFIRMED, name: "Подтверждено" },
  { id: WITHDRAW_STATUS.CANCELED, name: "Отменено" },
];
export const GAMES_FIELDS_LABELS = {
  USER_ID: "ID пользователя",
  USER: "Пользователь",
  GAME_USER_ID: "standoff ID",
  AMOUNT: "Сумма",
  STATUS: "Статус",
  TAKEN_BY_ADMIN_ID: "Кем взята в работу",
};
