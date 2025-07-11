import apiInstance from "../../axiosInstance";

import type {
  GetReferralsRequest,
  GetReferralsResponse,
  LoginByInitDataRequest,
  LoginByInitDataResponse,
  UpdateLanguageRequest,
  UpdateLanguageResponse,
} from "./types/users.types";

const BASE_URL = "/users";
export const loginByInitData = (params: LoginByInitDataRequest) => {
  const formData = new URLSearchParams();

  formData.append("init_data", params.init_data);
  return apiInstance
    .post<LoginByInitDataResponse>(`${BASE_URL}/loginByInitData`, formData)
    .then((res) => res.data);
};
export const updateLanguage = (params: UpdateLanguageRequest) => {
  return apiInstance
    .put<UpdateLanguageResponse>(`${BASE_URL}/updateLanguage`, params)
    .then((res) => res.data);
};
export const getReferrals = (
  params: GetReferralsRequest,
  signal: AbortSignal,
) => {
  return apiInstance
    .get<GetReferralsResponse>(`${BASE_URL}/referrals`, { params, signal })
    .then((res) => res.data);
};
