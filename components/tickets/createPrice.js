export const createPrice = (price) => {
  const priceEl = document.createElement('div');
  priceEl.classList.add('bolder');
  priceEl.innerText = '€ ' + price;
  return priceEl;
};
