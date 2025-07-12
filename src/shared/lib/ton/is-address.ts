/* eslint-disable @typescript-eslint/no-unused-vars */
import { Address } from "@ton/core";

export const isAddress = (value: string) => {
  try {
    Address.parse(value);
    return true;
  } catch (e) {
    return false;
  }
};
