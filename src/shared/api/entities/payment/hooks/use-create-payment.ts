import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import type { AxiosError } from "axios";

import { PAYMENT_API } from "../endpoints";

export const useCreatePayment = () => {
  const client = useQueryClient();
  const webApp = useWebApp();

  const mutation = useMutation({
    mutationFn: PAYMENT_API.createPayment,
    onError: (error: AxiosError) => {
      throw error;
    },
    onSuccess: (data) => {
      const linkPayment = data?.data?.paymentUrl;

      if (linkPayment) {
        if (webApp?.openLink) {
          webApp.openLink(linkPayment);
        } else {
          const newWindow = window.open(linkPayment, "_blank");
          if (newWindow) {
            newWindow.opener = null;
          }
        }

        client.invalidateQueries();
        client.clear();
      }
    },
    onSettled: () => {},
  });

  return {
    ...mutation,
  };
};
