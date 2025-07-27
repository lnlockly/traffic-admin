import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNotify } from "react-admin";

import type { BadRespone } from "@/api/types/common.types";

import { NOTIFICATION_API } from "../endpoints";

export const useSendBroadcastToAllUsers = () => {
  const notify = useNotify();
  const mutation = useMutation({
    mutationFn: NOTIFICATION_API.sendBroadcastToAllUsers,
    onError: (err: AxiosError<BadRespone>) => {
      notify(err.response?.data.message, { type: "error" });
    },
    onSuccess: () => {},
  });

  return mutation;
};
