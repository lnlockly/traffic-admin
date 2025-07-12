import { type AxiosRequestConfig } from "axios";

export type ApiRequestConfig = AxiosRequestConfig & {
  signal?: AbortSignal;
};

export type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: ApiRequestConfig }
  : { params: Params; config?: ApiRequestConfig };

export type CommonResponse = {
  success: boolean;
  message: string;
};
