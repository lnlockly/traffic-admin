import apiInstance from "@/api/axiosInstance";

import type {
  GetConfigResponse as GetProjectConfigResponse,
  UpdateConfigRequest as UpdateProjectConfigRequest,
} from "../types";

const BASE_URL = "/config";

export const getConfig = async (signal: AbortSignal) => {
  const res = await apiInstance.get<GetProjectConfigResponse>(`${BASE_URL}`, {
    signal,
  });
  return res.data;
};

export const updateConfig = async (params: UpdateProjectConfigRequest) => {
  const res = await apiInstance.put(`${BASE_URL}`, params);
  return res.data;
};
