import "./src/toggleOverlays.js";
import { get } from "./src/utils.js";
import { fetchProducts } from "./src/fetchProducts.js";
import { setupStore, store } from "./src/setupStore.js";
import { displayProducts } from "./src/displayProducts.js";
import { allProductsUrl } from "./src/utils.js";
import { loadCart } from "./src/addToCart.js";

async function init() {
  const products = await fetchProducts(allProductsUrl);

  setupStore(products);

  const featuredProducts = store.filter((product) => product.featured === true);

  displayProducts(featuredProducts, get(".featured__cards"));

  loadCart();
}

window.addEventListener("DOMContentLoaded", init);
