import { get, setLocalStorage, getLocalStorage } from "./utils.js";
// import { cartItems } from "./addToCart.js";
import { addToCartDOM } from "./addToCartDOM.js";
import { cartItems } from "./addToCart.js";

// cartItems = getLocalStorage("cart");

const deleteItem = function (e) {
  e.stopImmediatePropagation();

  const id = e.target.dataset.id;

  const itemToDelete = cartItems.findIndex((item) => item.id === id);

  cartItems.splice(itemToDelete, 1);

  setLocalStorage("cart", cartItems);

  get(".cart__items").textContent = "";

  addToCartDOM(cartItems);
};

const addItem = function (e) {
  // console.log(cartItems);
  e.stopImmediatePropagation();

  const id = e.target.dataset.id;

  const itemToAdd = cartItems.find((item) => item.id === id);

  itemToAdd.count++;

  setLocalStorage("cart", cartItems);

  get(".cart__items").textContent = "";

  addToCartDOM(cartItems);
};

const subtractItem = function (e) {
  e.stopImmediatePropagation();

  const id = e.target.dataset.id;

  const itemToSubtract = cartItems.find((item) => item.id === id);

  itemToSubtract.count--;

  if (itemToSubtract.count === 0) {
    const itemToDelete = cartItems.findIndex((item) => item.id === id);

    cartItems.splice(itemToDelete, 1);

    get(".cart__items").textContent = "";

    addToCartDOM(cartItems);
  }

  setLocalStorage("cart", cartItems);

  get(".cart__items").textContent = "";

  addToCartDOM(cartItems);
};

export const updateCart = function () {
  get(".cart__items").addEventListener("click", (e) => {
    if (e.target.classList.contains("cart__item-remove")) {
      deleteItem(e);
    }

    if (e.target.classList.contains("cart__item-increase")) {
      addItem(e);
    }

    if (e.target.classList.contains("cart__item-decrease")) {
      subtractItem(e);
    }
  });
};
