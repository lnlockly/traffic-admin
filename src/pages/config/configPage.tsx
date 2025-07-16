import type { FC } from "react";
import { NumberInput, ResourceContextProvider, SimpleForm } from "react-admin";

import { useGetProjectConfig } from "@/api/entities/projectConfig";
import { useUpdateProjectConfig } from "@/api/entities/projectConfig/hooks/useUpdateProjectConfig";

export const ConfigPage: FC = () => {
  const { data: projectConfig } = useGetProjectConfig();
  const { mutate: updateProjectConfig } = useUpdateProjectConfig();

  const onHandleSubmit = (values: any) => {
    console.log(values);
    updateProjectConfig(values);
  };

  if (!projectConfig) return null;

  return (
    <ResourceContextProvider value="projectConfig">
      <SimpleForm
        onSubmit={onHandleSubmit}
        defaultValues={{
          houseEdge: projectConfig.houseEdge,
          minWithdrawAmount: projectConfig.minWithdrawAmount,
          referralPercentBonus: projectConfig.referralPercentBonus,
        }}
      >
        <NumberInput source="houseEdge" label="House Edge" />
        <NumberInput source="minWithdrawAmount" label="Min Withdraw Amount" />
        <NumberInput source="referralPercentBonus" label="Referral Bonus" />
      </SimpleForm>
    </ResourceContextProvider>
  );
};
