import { formatPrice, get } from "./utils.js";

export const addToCartDOM = function (items) {
  items.forEach((item) => {
    const html = `
    <div class="cart__item">
    <img src="${item.img}" alt="" class="cart__img" />

    <div class="cart__item-info">
      <h3 class="cart__item-title">${item.title}</h3>
      <p class="cart__item-price">&${formatPrice(item.price)}</p>
      <button class="cart__item-remove" data-id="${item.id}">remove</button>
    </div>

    <div class="cart__item-counter">
      <button class="cart__item-increase" data-id="${item.id}">&#8593;</button>
      <p class="cart__item-count">${item.count}</p>
      <button class="cart__item-decrease" data-id="${item.id}">&darr;</button>
    </div>
  </div>`;

    get(".cart__items").insertAdjacentHTML("beforeend", html);

    const totalPrice = items.reduce(
      (total, item) => (total += item.price * item.count),
      0
    );

    get(".cart__total").textContent = `total: $${formatPrice(totalPrice)}`;

    const totalItems = items.reduce((total, item) => (total += item.count), 0);

    get(".shopping-cart__value").textContent = totalItems;
  });

  if (items.length < 1) {
    get(".cart__total").textContent = `total: $0`;

    get(".shopping-cart__value").textContent = 0;
  }
};
