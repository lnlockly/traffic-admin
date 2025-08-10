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
import { CommonToolbar } from "@/features/commonToolbar";

export const TransactionList: FC = ({ ...props }) => {
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
          source="amount"
          disableSort
          label={TRANSACTION_FIELDS_lABELS.AMOUNT}
        />
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
          source="withdrawalRequestId"
          disableSort
          label={TRANSACTION_FIELDS_lABELS.WITHDRAWAL_REQUEST_ID}
        >
          <ReferenceField
            source="withdrawalRequestId"
            reference="withdrawal-requests"
          >
            <TextField source="id" />
          </ReferenceField>
        </DataTable.Col>
        <DataTable.Col
          source="purchaseId"
          disableSort
          label={TRANSACTION_FIELDS_lABELS.PURCHASE_ID}
        >
          <ReferenceField source="purchaseId" reference="purchases">
            <TextField source="id" />
          </ReferenceField>
        </DataTable.Col>
        <DataTable.Col
          source="txId"
          disableSort
          label={TRANSACTION_FIELDS_lABELS.TX_ID}
        />
      </DataTable>
    </List>
  );
};
