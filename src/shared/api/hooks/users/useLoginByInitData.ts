import { useMutation, useQueryClient } from "@tanstack/react-query";

import { loginByInitData } from "../../endpoints/users/users.api";

export const useLoginByInitData = () => {
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: loginByInitData,
    onError: () => {
      //toaster
    },
    onSuccess: () => {
      client.invalidateQueries();
    },
  });

  return mutation;
};
