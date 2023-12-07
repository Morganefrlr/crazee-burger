export const deepCloneArray = (arrayToClone) => {
  return JSON.parse(JSON.stringify(arrayToClone));
};
