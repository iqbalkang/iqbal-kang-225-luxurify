import { formatPrice, get } from "./utils.js";
import { store } from "./setupStore.js";
import { displayProducts } from "./displayProducts.js";
// import { get } from "./utils.js";

const searchProduct = function () {
  const productsContainer = get(".products__cards");
  const searchEl = get(".form__search");

  searchEl.addEventListener("input", (e) => {
    const searchResults = store.filter((item) =>
      item.name.startsWith(searchEl.value)
    );

    displayProducts(searchResults, productsContainer);

    if (searchResults.length < 1) {
      productsContainer.innerHTML = ` 
        <div>
          <h2>Sorry, no product found!</h2>
        </div>`;
    }
  });
};

const loadCompanies = function () {
  const companies = ["all"];

  store.forEach((item) => {
    if (!companies.includes(item.company)) companies.unshift(item.company);
  });

  companies.forEach((company) => {
    let html = `<button type="button" class="form__company">${company}</button> `;

    get(".form__companies-box").insertAdjacentHTML("afterbegin", html);

    get(".form__company").addEventListener("click", companyProducts);
  });
};

const productPrice = function () {
  const slider = get(".form__range");

  const prices = store.map((item) => item.price);

  const maxPrice = Math.ceil(Math.max(...prices) / 100);

  slider.max = maxPrice;

  slider.value = maxPrice;

  get(".form__range-value").textContent = maxPrice;

  slider.addEventListener("input", () => {
    get(".form__range-value").textContent = slider.value;

    const matchedPrice = store.filter((item) => {
      return formatPrice(item.price) < +slider.value;
    });

    displayProducts(matchedPrice, get(".products__cards"));

    if (matchedPrice.length < 1) {
      get(".products__cards").innerHTML = `
        <div>
            <h2>Sorry, no product found!</h2>
        </div>`;
    }
  });
};

const companyProducts = function (e) {
  e.preventDefault();

  const company = e.target.textContent;

  const matchedCompanies = store.filter((item) => {
    return item.company === company;
  });

  displayProducts(matchedCompanies, get(".products__cards"));

  if (company === "all") displayProducts(store, get(".products__cards"));
};

export { searchProduct, loadCompanies, productPrice };
