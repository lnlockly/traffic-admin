import apiInstance from "@/api/axiosInstance";
import type { RequestConfig } from "@/api/types/common.types";

import type { PaymentDto, PaymentResponse } from "../types/payment.types";

export type CreatePaymentConfig = RequestConfig<PaymentDto>;

export const createPayment = ({ params, config }: CreatePaymentConfig) => {
  return apiInstance.post<PaymentResponse>("/payment/create", params, config);
};
