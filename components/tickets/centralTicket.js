import { calcTravelTime } from '../../functionUtilities.js';
export const centralTicket = (
  departureAirport,
  arrivalAirport,
  departureTime,
  arrivalTime
) => {
  const element = document.createElement('div');
  element.classList.add('d-flex');

  const divLeft = document.createElement('div');
  divLeft.append(departureTime, arrivalAirport);

  const divCenter = document.createElement('div');
  divCenter.innerText = '1:40'; //calcTravelTime(departureTime, arrivalTime);

  const divRight = document.createElement('div');
  divRight.append(arrivalTime, departureAirport);
  element.append(divLeft, divCenter, divRight);
  return element;
};
