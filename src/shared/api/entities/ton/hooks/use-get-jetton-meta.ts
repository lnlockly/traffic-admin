import { useQuery } from "@tanstack/react-query";
import { Address } from "@ton/core";

import { QUERY_KEYS } from "@/model/consts/queryKeys";

import { showErrorForDevelop } from "@/shared/lib/show-error-for-develop";

import { API_TON } from "../endpoints";
import { repeatRequest } from "../lib/repeat-request";

export const useGetJettonMeta = (address: string, isFetch: boolean) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TON_API.JETTON_META, address],
    queryFn: async () => {
      try {
        const result = await repeatRequest(() =>
          API_TON.getJettonMeta(Address.parse(address)),
        );

        if (result) {
          return result;
        }

        return undefined;
      } catch (error) {
        showErrorForDevelop("useGetJettonMeta", error);
      }
    },
    enabled: isFetch,
  });
};
