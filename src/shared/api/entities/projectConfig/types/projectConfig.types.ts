export type GetConfigResponse = {
  houseEdge: number;
  minWithdrawAmount: number;
  referralPercentBonus: number;
  minGoldDepositAmount: number;
};
export type UpdateConfigRequest = {
  houseEdge: number;
  minWithdrawAmount: number;
  referralPercentBonus: number;
  minGoldDepositAmount: number;
};
