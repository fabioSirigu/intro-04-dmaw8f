import { totalSection } from './totalSection.js';
import { ticketsList } from './ticketsList.js';
//total function
import { total } from '../../functionUtilities.js';
const priceTot = total(120, 120);
const list = ticketsList();
const totalSect = totalSection(priceTot);
//console.log(list);
export const basket = () => {
  const basket = document.createElement('div');
  basket.classList.add('basket');
  //append top and bottom basket section
  basket.append(totalSect, list);
  return basket;
};
