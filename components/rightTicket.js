import { flights } from '../data';
import { createButton } from './createButton.js';
import { createPrice } from './createPrice.js';
const title = 'Book Now';

const button = createButton();
const price = createPrice(flights[1].price);

export const rightTicket = () => {
  const element = document.createElement('div');
  element.classList.add('d-flex');
  element.append(price, button);
  return element;
};
