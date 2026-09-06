
export const calculateEmi = (price, months) => {
  return Math.round(price / months);
};
