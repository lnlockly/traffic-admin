import { WITHDRAW_STATUS } from "@/entities/withdrawalRequest/model/types/withdrawalRequest.type";

export const withdrawalRequestChoices = [
  { id: WITHDRAW_STATUS.PENDING, name: "В ожидании" },
  { id: WITHDRAW_STATUS.IN_PROGRESS, name: "В работе" },
  { id: WITHDRAW_STATUS.COMPLETED, name: "Подтверждено" },
  { id: WITHDRAW_STATUS.REJECTED, name: "Отменено" },
];

export const WITHDRAWAL_REQUESTS_FIELDS_LABELS = {
  USER_ID: "ID пользователя",
  USER: "Пользователь",

  AMOUNT: "Сумма",
  STATUS: "Статус",
  WALLET: "Кошелек",

  TAKEN_BY_ADMIN_ID: "Кем взята в работу",
};
