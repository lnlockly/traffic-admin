import type { FC } from "react";
import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

import { USERS_FIELDS_LABELS } from "../const";

interface Props {
  className?: string;
}

export const UserEdit: FC<Props> = ({ ...props }) => {
  return (
    <Edit
      {...props}
      transform={(data) => ({
        balance: data.balance,
        totalDeposited: data.totalDeposited,
        totalWagered: data.totalWagered,
        totalWinAmount: data.totalWinAmount,
        referralCode: data.referralCode,
        referredByCode: data.referredByCode,
      })}
    >
      <SimpleForm>
        <NumberInput source="balance" label={USERS_FIELDS_LABELS.BALANCE} />

        <NumberInput
          source="totalDeposited"
          label={USERS_FIELDS_LABELS.TOTAL_DEPOSITED}
        />
        <NumberInput
          source="totalWagered"
          label={USERS_FIELDS_LABELS.TOTAL_WAGERED}
        />
        <NumberInput
          source="totalWinAmount"
          label={USERS_FIELDS_LABELS.TOTAL_WIN_AMOUNT}
        />
        <TextInput
          source="referralCode"
          label={USERS_FIELDS_LABELS.REFERRAL_CODE}
        />
        <TextInput
          source="referredByCode"
          label={USERS_FIELDS_LABELS.REFERRED_BY_CODE}
        />
      </SimpleForm>
    </Edit>
  );
};
