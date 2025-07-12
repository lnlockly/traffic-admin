export const TEXT_SIZES_VARIABLES = {
  default: "default",
  small: "small",
  large: "large",
} as const;

export const TEXT_SIZES = {
  [TEXT_SIZES_VARIABLES.default]: "text-base",
  [TEXT_SIZES_VARIABLES.small]: "text-sm",
  [TEXT_SIZES_VARIABLES.large]: "text-lg",
};
