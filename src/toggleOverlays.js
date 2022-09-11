import { get } from "./utils.js";

// SIDEBAR TOGGLE
const sidebarCloseBtn = get(".btn--toggle-close");
const sidebarOpenBtn = get(".btn--toggle-open");
const sidebarOverlay = get(".sidebar__overlay");

sidebarCloseBtn.addEventListener("click", () =>
  sidebarOverlay.classList.remove("show")
);

sidebarOpenBtn.addEventListener("click", () =>
  sidebarOverlay.classList.add("show")
);

// CART TOGGLE
const cartOpenBtn = get(".shopping-cart");
const cartCloseBtn = get(".cart__close");
const cartOverlay = get(".cart__overlay");

export const openCart = () => cartOverlay.classList.add("show");

cartOpenBtn.addEventListener("click", openCart);

cartCloseBtn.addEventListener("click", () =>
  cartOverlay.classList.remove("show")
);
