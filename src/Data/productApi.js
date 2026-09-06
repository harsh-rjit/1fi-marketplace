
import products from "./product";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock API success
      resolve(products);

    }, 800);
  });
};

