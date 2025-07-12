import type { CommonResponse } from "@/api/types/common.types";

export enum LANGUAGES {
  ENG = "en",
}
export type User = {
  id: number;
  photo: string;
  mention: string;
  balance: number;
  level: number;
  langCode: LANGUAGES;
  auth: {
    accessToken: string;
    refreshToken: string;
  };
};
export type LoginByInitDataRequest = {
  init_data: string;
};
export type LoginByInitDataResponse = CommonResponse & {
  user: User;
};

export type UpdateLanguageRequest = {
  langCode: LANGUAGES;
};
export type UpdateLanguageResponse = CommonResponse & {
  langCode: LANGUAGES;
};

export type Referral = {
  id: number;
  photo: string;
  mention: string;
};
export type GetReferralsRequest = {
  page?: number;
  limit?: number;
};
export type GetReferralsResponse = CommonResponse & {
  referrals: Referral[];
  referralLink: string;
  page: number;
  totalPages: number;
};
