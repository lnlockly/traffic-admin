import { useMutation, useQueryClient } from "@tanstack/react-query";

import { USER_API } from "../endpoints";

export const useUpdateLanguage = () => {
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: USER_API.updateLanguage,
    onError: () => {
      //toaster
    },
    onSuccess: () => {
      client.invalidateQueries();
    },
  });

  return mutation;
};
