import type { FC } from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

import { USERS_FIELDS_LABELS } from "../const";

export const UserShow: FC = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="tgId" label={USERS_FIELDS_LABELS.TG_ID} />
        <TextField source="username" label={USERS_FIELDS_LABELS.USERNAME} />
        <TextField source="balance" label={USERS_FIELDS_LABELS.BALANCE} />
        <TextField
          source="totalDeposited"
          label={USERS_FIELDS_LABELS.TOTAL_DEPOSITED}
        />
        <TextField
          source="totalWagered"
          label={USERS_FIELDS_LABELS.TOTAL_WAGERED}
        />
        <TextField
          source="totalWinAmount"
          label={USERS_FIELDS_LABELS.TOTAL_WIN_AMOUNT}
        />

        <TextField
          source="referralCode"
          label={USERS_FIELDS_LABELS.REFERRAL_CODE}
        />
        <TextField
          source="referredByCode"
          label={USERS_FIELDS_LABELS.REFERRED_BY_CODE}
        />

        {/* <UserTaskAnswersList /> */}
      </SimpleShowLayout>
    </Show>
  );
};
