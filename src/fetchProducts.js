// import { allProductsUrl } from "./utils.js";

export const fetchProducts = async function (url) {
  try {
    const data = await fetch(url);

    return data.json();
  } catch (err) {
    console.log(err);
  }
};
