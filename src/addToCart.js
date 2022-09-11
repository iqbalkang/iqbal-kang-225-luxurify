import { store } from "./setupStore.js";
import { Cart } from "./cartClass.js";
import { addToCartDOM } from "./addToCartDOM.js";
import { getLocalStorage, setLocalStorage } from "./utils.js";
import { updateCart } from "./updateCart.js";

export let cartItems;

export const addToCart = function (e) {
  cartItems = getLocalStorage("cart");

  const id = e.target.dataset.id;

  const selectedProduct = store.find((item) => item.id === id);

  const itemToAdd = cartItems.find((item) => item.id === id);

  if (!itemToAdd) {
    const cart = new Cart(
      selectedProduct.id,
      selectedProduct.name,
      selectedProduct.price,
      selectedProduct.img,
      1
    );

    cartItems.push(cart);
  } else {
    itemToAdd.count++;
  }

  addToCartDOM(cartItems);

  updateCart(cartItems);

  setLocalStorage("cart", cartItems);
};

export const loadCart = function () {
  cartItems = getLocalStorage("cart");
  addToCartDOM(cartItems);
  updateCart();
};
