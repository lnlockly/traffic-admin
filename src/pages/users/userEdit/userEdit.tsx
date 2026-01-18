import type { FC } from "react";
import { Edit, NumberInput, SimpleForm } from "react-admin";

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
        gamesCount: data.gamesCount,
        referralCode: data.referralCode,
        referredByCode: data.referredByCode,
      })}
    >
      <SimpleForm>
        <NumberInput
          source="balance"
          label={USERS_FIELDS_LABELS.ACCUMULATED_BALANCE}
        />

        {/* <NumberInput
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
        <NumberInput
          source="gamesCount"
          label={USERS_FIELDS_LABELS.GAMES_COUNT}
        />

        <TextInput
          source="referralCode"
          label={USERS_FIELDS_LABELS.REFERRAL_CODE}
        />
        <TextInput
          source="referredByCode"
          label={USERS_FIELDS_LABELS.REFERRED_BY_CODE}
        /> */}
      </SimpleForm>
    </Edit>
  );
};
