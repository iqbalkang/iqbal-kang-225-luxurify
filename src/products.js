import "./toggleOverlays.js";
import { get } from "./utils.js";
import { store } from "./setupStore.js";
import { loadCart } from "./addToCart.js";
import { displayProducts } from "./displayProducts.js";
import {
  searchProduct,
  loadCompanies,
  productPrice,
} from "./filterProducts.js";

const init = function () {
  loadCompanies();

  get(".product__loading").style.display = "none";

  displayProducts(store, get(".products__cards"));

  searchProduct();

  productPrice();

  loadCart();
};

window.addEventListener("DOMContentLoaded", init);
