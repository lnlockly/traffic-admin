import apiInstance from "@/api/axiosInstance";

import type { ChangeStatusRequest } from "../types/withdrawalRequests.types";

const BASE_URL = "/withdrawal-requests";

export const changeStatus = async (params: ChangeStatusRequest) => {
  const res = await apiInstance.put(`${BASE_URL}/change-status/${params.id}`, {
    status: params.status,
    comment: params.comment,
  });
  return res.data;
};
