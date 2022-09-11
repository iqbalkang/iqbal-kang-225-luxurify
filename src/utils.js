const allProductsUrl = "https://course-api.com/javascript-store-products";

const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

const get = function (selection, all = "single") {
  const element =
    all === "all"
      ? document.querySelectorAll(selection)
      : document.querySelector(selection);

  if (element) return element;
  else throw Error(selection + " does not exist in HTML");
};

const getLocalStorage = function (key) {
  const localData = JSON.parse(localStorage.getItem(key));

  if (!localData) return [];

  return localData;
};

const setLocalStorage = function (key, data) {
  localStorage.setItem(key, JSON.stringify(data));
};

const formatPrice = (price) => price / 100;

export {
  allProductsUrl,
  singleProductUrl,
  get,
  getLocalStorage,
  setLocalStorage,
  formatPrice,
};
