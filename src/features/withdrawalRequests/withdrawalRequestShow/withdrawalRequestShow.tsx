import type { FC } from "react";
import { Show } from "react-admin";

import { WithdrawalRequestShowActions } from "./ui/withdrawalRequestShowActions";
import { WithdrawalRequestShowContent } from "./ui/withdrawalRequestShowContent";

export const WithdrawalRequestShow: FC = () => {
  return (
    <>
      <Show actions={<WithdrawalRequestShowActions />}>
        <WithdrawalRequestShowContent />
      </Show>
    </>
  );
};
