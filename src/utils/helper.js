export const isExists = (cart, product) => {
  return cart.find((i) => i.id === product.id);
};

export const getUniqueValue = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "size") {
    unique = unique.flat();
  }
  return [...new Set(unique)];
};
