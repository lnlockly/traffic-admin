import type { FC } from "react";
import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

import { WITHDRAWAL_REQUESTS_FIELDS_LABELS } from "../const";

interface Props {
  className?: string;
}

export const WithdrawalRequestEdit: FC<Props> = ({ ...props }) => {
  return (
    <Edit
      {...props}
      transform={(data) => ({
        gameUserId: data.gameUserId,
        amount: data.amount,
      })}
    >
      <SimpleForm>
        <TextInput
          source="gameUserId"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.GAME_USER_ID}
        />
        <NumberInput
          source="amount"
          label={WITHDRAWAL_REQUESTS_FIELDS_LABELS.AMOUNT}
        />
      </SimpleForm>
    </Edit>
  );
};
