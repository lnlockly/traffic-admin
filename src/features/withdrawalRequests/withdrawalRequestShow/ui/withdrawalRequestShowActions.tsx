import type { FC } from "react";
import { EditButton, TopToolbar, useRecordContext } from "react-admin";

import { WITHDRAW_STATUS } from "@/entities/withdrawalRequest/model/types/withdrawalRequest.type";

export const WithdrawalRequestShowActions: FC = () => {
  const record = useRecordContext();

  if (!record) return null;

  const isFinished =
    record.status === WITHDRAW_STATUS.CONFIRMED ||
    record.status === WITHDRAW_STATUS.CANCELED;

  return <TopToolbar>{!isFinished && <EditButton />}</TopToolbar>;
};
