export const greaterZeroNormalize = (value) => {
  if (!value) {
    return value;
  }

  if (value < 0) {
    return 0;
  } else {
    return value;
  }
};
