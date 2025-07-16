import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNotify } from "react-admin";

import type { BadRespone } from "@/api/types/common.types";

import { WITHDRAWAL_API } from "../endpoints";

export const useChangeStatus = () => {
  const client = useQueryClient();
  const notify = useNotify();
  const mutation = useMutation({
    mutationFn: WITHDRAWAL_API.changeStatus,
    onError: (err: AxiosError<BadRespone>) => {
      notify(err.response?.data.message, { type: "error" });
    },
    onSuccess: () => {
      client.invalidateQueries();
    },
  });

  return mutation;
};
