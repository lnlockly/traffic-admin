import { SelectInput, TextInput } from "react-admin";

import {
  TRANSACTION_FIELDS_lABELS,
  transactionStatusChoices,
  transactionTypesChoices,
} from "@/pages/transaction/const";

export const TransactionFilter = [
  <TextInput source="id" label="id" />,
  <SelectInput
    source="type"
    choices={transactionTypesChoices}
    emptyValue={""}
    emptyText={"Все"}
    label={TRANSACTION_FIELDS_lABELS.TYPE}
  />,
  <SelectInput
    source="status"
    choices={transactionStatusChoices}
    emptyValue={""}
    emptyText={"Все"}
    label={TRANSACTION_FIELDS_lABELS.STATUS}
  />,
  <TextInput
    source="toUserTgId"
    label={TRANSACTION_FIELDS_lABELS.TO_USER_ID}
  />,
  <TextInput
    source="toUsername"
    label={TRANSACTION_FIELDS_lABELS.TO_USERNAME}
  />,
  <TextInput
    source="fromUserTgId"
    label={TRANSACTION_FIELDS_lABELS.FROM_USER_ID}
  />,
  <TextInput
    source="fromUsername"
    label={TRANSACTION_FIELDS_lABELS.FROM_USERNAME}
  />,
];
