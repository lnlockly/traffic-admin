import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNotify } from "react-admin";

import { QUERY_KEYS } from "@/model/consts/queryKeys";

import type { BadRespone } from "@/api/types/common.types";

import { PROJECT_CONFIG_API } from "../endpoints";

export const useUpdateProjectConfig = () => {
  const client = useQueryClient();
  const notify = useNotify();
  const mutation = useMutation({
    mutationFn: PROJECT_CONFIG_API.updateConfig,
    onError: (err: AxiosError<BadRespone>) => {
      notify(err.response?.data.message, { type: "error" });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECT_CONFIG.GET] });
    },
  });

  return mutation;
};
