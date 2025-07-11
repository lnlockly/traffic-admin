import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/model/consts/queryKeys";

import type { GetReferralsRequest } from "@/api/endpoints/users/types/users.types";

import { getReferrals } from "../../endpoints/users/users.api";

export const useGetReferrals = (params: GetReferralsRequest) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.USERS.GET_REFERRALS, params],
    queryFn: async ({ signal }) => {
      try {
        return await getReferrals(params, signal);
      } catch (error) {
        console.error("error-useGetReferrals", error);
      }
    },
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
  });

  return query;
};
