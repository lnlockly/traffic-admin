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
          minGoldDepositAmount: projectConfig.minGoldDepositAmount,
        }}
      >
        <NumberInput
          source="houseEdge"
          label="House Edge в %"
          parse={(value) => (value != null ? value / 100 : null)}
          format={(value) => (value != null ? value * 100 : null)}
        />
        <NumberInput
          source="minWithdrawAmount"
          label="Минимальная сумма вывода"
        />
        <NumberInput
          source="referralPercentBonus"
          label="Бонус от пополнения для рефералов в %"
          parse={(value) => (value != null ? value / 100 : null)}
          format={(value) => (value != null ? value * 100 : null)}
        />
        <NumberInput
          source="minGoldDepositAmount"
          label="Минимальная сумма пополнения золота"
        />
      </SimpleForm>
    </ResourceContextProvider>
  );
};
