import { flights } from '../data';
import { textMuted } from './textMuted.js';
import { createTimes } from './createTimes.js';

const depTimes = createTimes(flights[1].departureTime);
const arrTimes = createTimes(flights[1].arrivalTime);
const airportDep = textMuted(flights[1].departureAirport);
const airportArr = textMuted(flights[1].arrivalAirport);

const divLeft = document.createElement('div');
divLeft.append(depTimes, airportDep);

/* const divCenter = document.createElement('div');
function
divCenter.append(depTimes, airportDep); */

const divRight = document.createElement('div');
divRight.append(arrTimes, airportArr);

export const centralTicket = () => {
  const element = document.createElement('div');
  element.classList.add('d-flex');
  element.append(divLeft, divRight);
  return element;
};
