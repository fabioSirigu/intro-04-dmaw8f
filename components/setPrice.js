export const setPrice = (price) => {
  let priceEl = document.createElement('div');
  priceEl.classList.add('bolder');
  priceEl.innerText = '€ ' + price;
  return priceEl;
};
