import { flights } from '../data';
import { textMuted } from './textMuted.js';
import { createTimes } from './createTimes.js';

export const centralTicket = (
  departureTime,
  arrivalTime,
  airportDeparture,
  airportArrival
) => {
  const element = document.createElement('div');
  element.classList.add('d-flex');

  const depTimes = createTimes(departureTime);
  const arrTimes = createTimes(arrivalTime);
  const airportDep = textMuted(airportDeparture);
  const airportArr = textMuted(airportArrival);
  const divLeft = document.createElement('div');
  divLeft.append(depTimes, airportDep);

  /* const divCenter = document.createElement('div');
function
divCenter.append(depTimes, airportDep); */

  const divRight = document.createElement('div');
  divRight.append(arrTimes, airportArr);
  element.append(divLeft, divRight);
  return element;
};
