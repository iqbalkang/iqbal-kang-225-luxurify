import "./toggleOverlays.js";
import { singleProductUrl } from "./utils.js";
import { fetchProducts } from "./fetchProducts.js";
import { get, formatPrice } from "./utils.js";
import { loadCart } from "./addToCart.js";
import { openCart } from "./toggleOverlays.js";

const displayProduct = function (product) {
  const { id } = product;
  const {
    colors,
    company,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];

  const productImg = get(".product__img");
  const productCompany = get(".product__company");
  const productDesc = get(".product__text");
  const productPrice = get(".product__price");
  const productTitle = get(".product__title");

  productImg.src = img;
  productCompany.textContent = company;
  productDesc.textContent = description;
  productPrice.textContent = formatPrice(price);
  productTitle.textContent = title;
};

const init = async function () {
  const productId = window.location.search;

  const product = await fetchProducts(`${singleProductUrl}${productId}`);

  get(".product__loading").style.display = "none";

  displayProduct(product);

  // loadCart();

  // get(".btn--add-cart").addEventListener("click", () => {
  //   loadCart();

  //   openCart();
  // });
};

window.addEventListener("DOMContentLoaded", init);
