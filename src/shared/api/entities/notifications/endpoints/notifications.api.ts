import apiInstance from "@/api/axiosInstance";

import type { sendBroadcastToAllUsersRequest } from "../types";

const BASE_URL = "/notifications";

export const sendBroadcastToAllUsers = async (
  params: sendBroadcastToAllUsersRequest,
) => {
  const res = await apiInstance.post(`${BASE_URL}/broadcast`, params);
  return res.data;
};
