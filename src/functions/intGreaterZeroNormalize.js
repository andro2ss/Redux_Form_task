export const intGreaterZeroNormalize = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums < 0) {
    return 0;
  } else {
    return Math.floor(onlyNums);
  }
};
