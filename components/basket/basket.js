import { totalSection } from './totalSection.js';
import { ticketsList } from './ticketsList.js';
//total function
import { total } from '../../functionUtilities.js';
const list = ticketsList();
const totalSect = totalSection(10);
//console.log(list);
export const basket = () => {
  const basket = document.createElement('div');
  basket.classList.add('basket');
  //append top and bottom basket section
  basket.append(totalSect, list);
  return basket;
};
