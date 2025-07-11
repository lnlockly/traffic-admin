import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateLanguage } from "../../endpoints/users/users.api";

export const useUpdateLanguage = () => {
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateLanguage,
    onError: () => {
      //toaster
    },
    onSuccess: () => {
      client.invalidateQueries();
    },
  });

  return mutation;
};
