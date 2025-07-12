import { TonApiClient } from "@ton-api/client";
import { Address } from "@ton/core";

import { TON_API_URL } from "@/model/consts/common";
import { DEFAULT } from "@/model/consts/default";

import { showErrorForDevelop } from "@/shared/lib/show-error-for-develop";

const tonapi = new TonApiClient({
  baseUrl: `${TON_API_URL}`,
});

export async function waitForTx(msgHash: string, attempt = 0) {
  try {
    return await tonapi.blockchain.getBlockchainTransactionByMessageHash(
      msgHash,
    );
  } catch (e) {
    if (attempt >= 10) {
      throw e;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return waitForTx(msgHash, attempt + 1);
  }
}

export async function getMasterAddressJettonWallet(
  jettonMasterAddress: Address,
) {
  try {
    const result = await tonapi.blockchain.execGetMethodForBlockchainAccount(
      jettonMasterAddress,
      "get_wallet_data",
    );

    return result;
  } catch (error) {
    showErrorForDevelop("getMasterAddressJettonWallet", error);
    throw error;
  }
}

export async function getJettonWalletAddress(
  jettonMasterAddress: Address,
  walletAddress: string,
): Promise<string | Address> {
  try {
    const result = await tonapi.blockchain.execGetMethodForBlockchainAccount(
      jettonMasterAddress,
      "get_wallet_address",
      {
        args: [walletAddress],
      },
    );

    return result.decoded.jetton_wallet_address;
  } catch (error) {
    showErrorForDevelop("getJettonWalletAddress", error);
    throw error;
  }
}

export async function getListJetton(address: Address) {
  try {
    const result = await tonapi.accounts.getAccountJettonsBalances(address);

    return result;
  } catch (error) {
    showErrorForDevelop("getListJetton", error);
    throw error;
  }
}

export async function getJettonMeta(address: Address) {
  try {
    const result = await tonapi.jettons.getJettonInfo(address);

    return result;
  } catch (error) {
    showErrorForDevelop("getJettonMeta", error);
    throw error;
  }
}

export async function getJettonBalances(
  address: Address,
  currencies?: string[],
) {
  try {
    const result = await tonapi.accounts.getAccountJettonsBalances(address, {
      currencies: currencies || DEFAULT.CURRENCIES,
    });

    return result;
  } catch (error) {
    showErrorForDevelop("getJettonBalances", error);
    throw error;
  }
}
