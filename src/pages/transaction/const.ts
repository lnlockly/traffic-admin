import {
  TRANSACTION_STATUS,
  TRANSACTION_TYPE,
} from "@/entities/transaction/model/type/transaction.type";

export const transactionTypesChoices = [
  { id: TRANSACTION_TYPE.DEPOSIT, name: "Пополнение" },
  { id: TRANSACTION_TYPE.MARKET, name: "Покупка" },
  { id: TRANSACTION_TYPE.REFERRAL_BONUS, name: "Реф бонус" },
  { id: TRANSACTION_TYPE.WITHDRAWAL, name: "Вывод" },
];
export const transactionStatusChoices = [
  { id: TRANSACTION_STATUS.PENDING, name: "В ожидании" },
  { id: TRANSACTION_STATUS.COMPLETED, name: "Выполнено" },
  { id: TRANSACTION_STATUS.CANCELED, name: "Отменено" },
];
export const TRANSACTION_FIELDS_lABELS = {
  TITLE: "Название",
  AMOUNT: "Сумма",
  WITHDRAWAL_REQUEST_ID: "ID вывода",
  PURCHASE_ID: "ID покупки",
  TX_ID: "ID транзакции в шлюзе",
  TYPE: "Тип",
  STATUS: "Статус",
  TO_USER_ID: "Tg ID получателя",
  TO_USERNAME: "Получатель",
  FROM_USER_ID: "Tg ID отправителя",
  FROM_USERNAME: "Отправитель",
};
