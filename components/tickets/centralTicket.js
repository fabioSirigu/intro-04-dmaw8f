import { calcTravelTime } from '../../functionUtilities.js';
import { createTimes } from './createTimes.js';
import { textMuted } from '../utilities/textMuted.js';
export const centralTicket = ({
  departureTime,
  arrivalTime,
  arrivalAirport,
  departureAirport,
}) => {
  const element = document.createElement('div');
  element.classList.add('d-flex');

  const divLeft = document.createElement('div');
  divLeft.append(createTimes(departureTime), textMuted(departureAirport));

  const divCenter = document.createElement('div');
  divCenter.classList.add('muted', 'borderTratt');
  //divCenter.innerText = calcTravelTime(departureTime, arrivalTime);
  const departureMs = calcTravelTime(departureTime);
  const arrivalMs = calcTravelTime(arrivalTime);
  const duration = arrivalMs - departureMs;
  const durationHours = Math.floor(duration / (1000 * 60 * 60));
  const durationMinutes = Math.floor(
    (duration % (1000 * 60 * 60)) / (1000 * 60)
  );
  const formatter = `${durationHours}h ${durationMinutes}m`;
  divCenter.innerText = formatter;

  
  const divRight = document.createElement('div');
  divRight.append(createTimes(arrivalTime), textMuted(arrivalAirport));

  element.append(divLeft, divCenter, divRight);
  return element;
};
