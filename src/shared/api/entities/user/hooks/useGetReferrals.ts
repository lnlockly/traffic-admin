import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/model/consts/queryKeys";

import { USER_API } from "../endpoints";
import type { GetReferralsRequest } from "../types/users.types";

export const useGetReferrals = (params: GetReferralsRequest) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.USERS.GET_REFERRALS, params],
    queryFn: async ({ signal }) => {
      try {
        return await USER_API.getReferrals(params, signal);
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
