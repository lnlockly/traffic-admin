
import apiInstance from "@/api/axiosInstance";
import type {
  GetReferralsRequest,
  GetReferralsResponse,
  LoginByInitDataRequest,
  LoginByInitDataResponse,
  UpdateLanguageRequest,
  UpdateLanguageResponse,
} from "../types/users.types";

const BASE_URL = "/users";

export const loginByInitData = async (params: LoginByInitDataRequest) => {
  const formData = new URLSearchParams();

  formData.append("init_data", params.init_data);
  const res = await apiInstance.post<LoginByInitDataResponse>(
    `${BASE_URL}/loginByInitData`,
    formData,
  );
  return res.data;
};

export const updateLanguage = async (params: UpdateLanguageRequest) => {
  const res = await apiInstance.put<UpdateLanguageResponse>(
    `${BASE_URL}/updateLanguage`,
    params,
  );
  return res.data;
};

export const getReferrals = async (
  params: GetReferralsRequest,
  signal: AbortSignal,
) => {
  const res = await apiInstance.get<GetReferralsResponse>(
    `${BASE_URL}/referrals`,
    { params, signal },
  );
  return res.data;
};
