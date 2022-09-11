import { addToCart } from "./addToCart.js";
import { openCart } from "./toggleOverlays.js";

import { formatPrice, get, getLocalStorage, setLocalStorage } from "./utils.js";

export const displayProducts = function (products, element) {
  element.textContent = "";

  products.forEach((product) => {
    const html = `
    <article class="card">
    
        <div class="card__img">
            <img src="${product.img}" alt="">

            <div class="card__icons">
                <a href="./product.html?id=${product.id}" class="card__search" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" fill="white"/></svg>
                </a>

                <button class="card__shopping" data-id="${product.id}">
                    <svg
                    width="24" height="24"
                    viewBox="0 0 69 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M22.3334 63.1763C22.3334 66.3504 20.0934 68.9195 17.3334 68.9195C14.5734 68.9195 12.3334 66.3504 12.3334 63.1763C12.3334 60.006 14.5734 57.433 17.3334 57.433C20.0934 57.433 22.3334 60.006 22.3334 63.1763ZM55.0134 0L43.5767 45.9464H36.57L45.0434 11.4866H25.0667C25.4434 13.3321 25.6667 15.2504 25.6667 17.2299C25.6667 30.9755 15.9667 42.1175 4.00003 42.1175C2.64336 42.1175 1.3167 41.9567 0.0300293 41.681L4.38336 53.6041H48.5134L60.0934 7.65773H66.5234L69 0H55.0134ZM34 57.433C31.24 57.433 29 60.0021 29 63.1763C29 66.3504 31.24 68.9195 34 68.9195C36.76 68.9195 39 66.3504 39 63.1763C39 60.006 36.76 57.433 34 57.433Z"
                    fill="white"
                    />
                </svg>
                </button>
            </div>
                
        </div>
        
        <div class="card__info">
            <p class="card__title">${product.name}</p>
            <span class="card__price">$${formatPrice(product.price)}</span>
        </div>
    </article>`;

    element.insertAdjacentHTML("afterbegin", html);

    get(".cart__items").textContent = "";

    get(".card__shopping").addEventListener("click", (e) => {
      get(".cart__items").textContent = "";

      openCart();

      addToCart(e);
    });
  });
};
