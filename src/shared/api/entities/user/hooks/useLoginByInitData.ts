import { useMutation, useQueryClient } from "@tanstack/react-query";

import { USER_API } from "../endpoints";

export const useLoginByInitData = () => {
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: USER_API.loginByInitData,
    onError: () => {
      //toaster
    },
    onSuccess: () => {
      client.invalidateQueries();
    },
  });

  return mutation;
};
