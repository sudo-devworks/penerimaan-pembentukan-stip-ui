export const clampProgressValue = (
  value: number,
  min: number,
  max: number,
): number => {
  if (max <= min) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
};

export const getProgressPercentage = (
  value: number,
  min: number,
  max: number,
): number => {
  if (max <= min) {
    return 0;
  }

  return ((value - min) / (max - min)) * 100;
};
