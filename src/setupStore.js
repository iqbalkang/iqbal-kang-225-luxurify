import { getLocalStorage, setLocalStorage } from "./utils.js";

export let store = getLocalStorage("store");

export const setupStore = function (products) {
  store = products.map((product) => {
    const { id } = product;
    const { company, name, price, featured } = product.fields;
    const { url: img } = product.fields.image[0];

    return { id, company, name, price, img, featured };
  });
  setLocalStorage("store", store);
};
