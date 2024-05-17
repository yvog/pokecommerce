export const capitalizeFirstChar = (value: string): string => {
  try {
    return value.charAt(0)?.toUpperCase() + value?.slice(1);
  } catch (e) {
    return value;
  }
};
