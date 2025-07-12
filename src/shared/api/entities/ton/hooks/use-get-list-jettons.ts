import { useQuery } from "@tanstack/react-query";
import { Address } from "@ton/core";

import { QUERY_KEYS } from "@/model/consts/queryKeys";

import { showErrorForDevelop } from "@/shared/lib/show-error-for-develop";

import { API_TON } from "../endpoints";
import { repeatRequest } from "../lib/repeat-request";

export const useGetListJettons = (
  addressWallet: string,
  isFetch: boolean,
  isPageSell?: boolean,
) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TON_API.BALANCES, addressWallet, isPageSell],
    queryFn: async () => {
      try {
        const result = await repeatRequest(() =>
          API_TON.getListJetton(Address.parse(addressWallet)),
        );

        return result.balances;
      } catch (error) {
        showErrorForDevelop("useGetListJettons", error);
        throw error;
      }
    },
    enabled: isFetch,
  });
};
