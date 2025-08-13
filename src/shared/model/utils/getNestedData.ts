export const getNestedData = (formData: any, path: string) => {
  return path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : null),
      formData,
    );
};
