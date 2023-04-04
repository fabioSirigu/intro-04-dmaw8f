import { flights } from '../../data.js';
//import { addCart } from '../../functionUtilities.js';

const arrAir = flights[1].arrivalAirport;
const depAir = flights[1].departureAirport;
const timeArr = flights[1].departureTime;
const timeDep = flights[1].arrivalTime;
const priceTicket = flights[1].price;

import { singleTicket } from './singleTicket.js';
const single = singleTicket(depAir, arrAir, timeDep, timeArr, priceTicket);
const single2 = singleTicket(depAir, arrAir, timeDep, timeArr, priceTicket);

//importo la funzione che genera i ticket dentro la list

export const ticketsList = () => {
  const listEl = document.createElement('div');

  //listEl.classList.add();
  listEl.append(single, single2);
  return listEl;
};
