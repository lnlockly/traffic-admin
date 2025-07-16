import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/model/consts/queryKeys";

import { PROJECT_CONFIG_API } from "../endpoints";

export const useGetProjectConfig = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.PROJECT_CONFIG.GET],
    queryFn: async ({ signal }) => {
      try {
        return await PROJECT_CONFIG_API.getConfig(signal);
      } catch (error) {
        console.error(`error-use-${QUERY_KEYS.PROJECT_CONFIG.GET}`, error);
      }
    },
  });

  return query;
};
