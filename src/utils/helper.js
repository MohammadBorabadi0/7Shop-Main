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

export const NavList = [
  { id: 0, icon: "fa-solid fa-house", link: "/" },
  { id: 1, icon: "fa-solid fa-heart", link: "/favorites" },
  { id: 2, icon: "fa-solid fa-basket-shopping", link: "/cart" },
  { id: 3, icon: "fa-solid fa-user", link: "/profile" },
];