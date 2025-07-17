import type { WITHDRAW_STATUS } from "@/entities/withdrawalRequest/model/types/withdrawalRequest.type";

export type ChangeStatusRequest = {
  id: string;
  status: WITHDRAW_STATUS;
  comment?: string;
};
