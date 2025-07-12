import { useQuery } from "@tanstack/react-query";
import { Address } from "@ton/core";

import { QUERY_KEYS } from "@/model/consts/queryKeys";

import { showErrorForDevelop } from "@/shared/lib/show-error-for-develop";

import { API_TON } from "../endpoints";
import { repeatRequest } from "../lib/repeat-request";

export const useGetMasterAddressJettonWallet = (
  jettonWalletAddress: string,
  isFetch: boolean,
) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TON_API.MASTER_ADDRESS_JETTON, jettonWalletAddress],
    queryFn: async () => {
      try {
        const result = await repeatRequest(() =>
          API_TON.getMasterAddressJettonWallet(
            Address.parse(jettonWalletAddress),
          ),
        );

        return result.decoded.jetton;
      } catch (error) {
        showErrorForDevelop("useGetJettonWalletAddress", error);
        throw error;
      }
    },
    enabled: isFetch,
  });
};
