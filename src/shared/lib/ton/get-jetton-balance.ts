import type { JettonBalance } from "@ton-api/client";

interface GetJettonBalanceParams {
  jettonBalance: JettonBalance;
  isFull?: boolean;
}

export const getJettonBalance = ({
  jettonBalance,
  isFull,
}: GetJettonBalanceParams) => {
  if (jettonBalance) {
    const { balance } = jettonBalance;
    const { decimals } = jettonBalance.jetton;
    const currentСoefficient = isFull ? 1 : 0.99;

    return (
      (Number(balance) / Math.pow(10, decimals)) *
      currentСoefficient
    ).toFixed(2);
  }
};
