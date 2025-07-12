import { useQuery } from "@tanstack/react-query";
import { Address } from "@ton/core";

import { QUERY_KEYS } from "@/model/consts/queryKeys";

import { showErrorForDevelop } from "@/shared/lib/show-error-for-develop";

import { API_TON } from "../endpoints";
import { repeatRequest } from "../lib/repeat-request";

type UseGetJettonBalancesParams = {
  addressCheck: string;
  currencies?: string[];
  isFetch?: boolean;
};

export const useGetJettonBalances = ({
  addressCheck,
  currencies,
  isFetch = true,
}: UseGetJettonBalancesParams) => {
  return useQuery({
    queryKey: [
      QUERY_KEYS.TON_API.BALANCES_CURRENCY,
      addressCheck,
      currencies?.join(),
    ],
    queryFn: async () => {
      try {
        const result = await repeatRequest(() =>
          API_TON.getJettonBalances(Address.parse(addressCheck), currencies),
        );

        if (result) {
          return result.balances;
        }

        return undefined;
      } catch (error) {
        showErrorForDevelop("useGetJettonBalances", error);
      }
    },
    enabled: isFetch,
  });
};
