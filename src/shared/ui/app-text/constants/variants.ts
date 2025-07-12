export const TEXT_VARIANTS_VARIABLES = {
  default: "default",
  link: "link",
} as const;

export const TEXT_VARIANTS = {
  [TEXT_VARIANTS_VARIABLES.default]: "text-gray-800",
  [TEXT_VARIANTS_VARIABLES.link]: "text-blue-600 underline",
};
