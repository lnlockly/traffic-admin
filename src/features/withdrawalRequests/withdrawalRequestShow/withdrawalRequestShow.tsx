import type { FC } from "react";
import { Show } from "react-admin";

import { WithdrawalRequestShowContent } from "./ui/withdrawalRequestShowContent";

export const WithdrawalRequestShow: FC = () => {
  return (
    <>
      <Show>
        <WithdrawalRequestShowContent />
      </Show>
    </>
  );
};
