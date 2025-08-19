import type { FC } from "react";
import {
  DataTable,
  FunctionField,
  List,
  ReferenceField,
  SelectField,
  TextField,
} from "react-admin";

import {
  TRANSACTION_FIELDS_lABELS,
  transactionStatusChoices,
  transactionTypesChoices,
} from "../const";

import { TransactionFilter } from "./ui/transactionFilter/transactionFilter";
import { TRANSACTION_TYPE } from "@/entities/transaction/model/type/transaction.type";
import { CommonToolbar } from "@/features/commonToolbar";

export const TransactionList: FC = ({ ...props }) => {
  const getCorrectReference = (type: TRANSACTION_TYPE) => {
    switch (type) {
      default:
        return "";
      case TRANSACTION_TYPE.DEPOSIT:
        return "deposits";
      case TRANSACTION_TYPE.WITHDRAWAL:
        return "withdrawal-requests";
      case TRANSACTION_TYPE.MARKET:
        return "purchases";

      case TRANSACTION_TYPE.EXCHANGE:
        return "exchange-requests";
    }
  };
  return (
    <List
      {...props}
      filters={TransactionFilter}
      actions={<CommonToolbar haveFilters />}
    >
      <DataTable bulkActionButtons={false}>
        <DataTable.Col source="id" disableSort />
        <DataTable.Col
          source="title"
          disableSort
          label={TRANSACTION_FIELDS_lABELS.TITLE}
        />
        <DataTable.Col
          source="type"
          disableSort
          label={TRANSACTION_FIELDS_lABELS.TYPE}
        >
          <SelectField source="type" choices={transactionTypesChoices} />
        </DataTable.Col>

        <DataTable.Col
          source="status"
          disableSort
          label={TRANSACTION_FIELDS_lABELS.STATUS}
        >
          <SelectField source="status" choices={transactionStatusChoices} />
        </DataTable.Col>
        <DataTable.Col
          source="toUserId"
          disableSort
          label={TRANSACTION_FIELDS_lABELS.TO_USER_ID}
        >
          <ReferenceField source="toUserId" reference="users">
            <FunctionField
              render={(record) =>
                record.username ? `@${record.username}` : `${record.tgId}`
              }
            />
          </ReferenceField>
        </DataTable.Col>
        <DataTable.Col
          source="fromUserId"
          disableSort
          label={TRANSACTION_FIELDS_lABELS.FROM_USER_ID}
        >
          <ReferenceField source="fromUserId" reference="users">
            <FunctionField
              render={(record) =>
                record.username ? `@${record.username}` : `${record.tgId}`
              }
            />
          </ReferenceField>
        </DataTable.Col>

        <DataTable.Col
          source="elementId"
          disableSort
          label={TRANSACTION_FIELDS_lABELS.ELEMENT_ID}
        >
          <FunctionField
            render={(record) => (
              <ReferenceField
                source="elementId"
                reference={getCorrectReference(record.type as TRANSACTION_TYPE)}
              >
                <TextField source="id" />
              </ReferenceField>
            )}
          />
        </DataTable.Col>
      </DataTable>
    </List>
  );
};
