import { DEFAULT } from "@/model/consts/default";

export const sliseAddress = (
  value: string,
  decimal: number = DEFAULT.SLICE_ADDRESS,
) => {
  if (value.length >= decimal) {
    const newValue =
      value.slice(0, Math.floor(decimal / 2)) +
      "..." +
      value.slice(-Math.floor(decimal / 2));
    return newValue;
  }

  return value;
};
