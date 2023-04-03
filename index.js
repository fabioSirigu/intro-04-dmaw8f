import { flights } from './data';
import './style.css';
import { createButton } from './components/createButton.js';
import { createPrice } from './components/createPrice.js';
import { createTimes } from './components/createTimes.js';
import { textMuted } from './components/textMuted.js';
import { createPassenger } from './components/createPassenger.js';
import { createCompany } from './components/createCompany.js';
import { createLogo } from './components/createLogo.js';
import { topTicket } from './components/topTicket.js';
import { leftTicket } from './components/leftTicket.js';
import { rightTicket } from './components/rightTicket.js';
import { centralTicket } from './components/centralTicket.js';
import { bottomTicket } from './components/bottomTicket.js';

let appDiv = document.getElementById('app');

//generateRows
for (let i = 0; i < flights.length; i++) {
  const singleFlight = flights[i];
  //info variables
  const title = 'Book Now';
  const button = createButton(title);
  const price = createPrice(singleFlight.price);
  const depTimes = createTimes(singleFlight.departureTime);
  const arrTimes = createTimes(singleFlight.arrivalTime);
  const airportDep = textMuted(singleFlight.departureAirport);
  const airportArr = textMuted(singleFlight.arrivalAirport);
  const aircraftType = textMuted(singleFlight.aircraftType);
  const flightClass = textMuted(singleFlight.flightClass);
  const passengers = createPassenger(singleFlight.passengers);
  const name = createCompany(singleFlight.companyName);
  const logo = createLogo(singleFlight.companyLogo);
  //ticket assembl
  const ticketTop = topTicket();
  const ticketBottom = bottomTicket(flightClass, passengers);
  const left = leftTicket(logo, aircraftType, name);
  const right = rightTicket(price, button);
  const central = centralTicket(
    depTimes,
    arrTimes,
    airportDep,
    airportArr,
    flights
  );

  ticketTop.append(left, central, right);
  const rowTicket = document.createElement('div');
  rowTicket.classList.add('row');
  rowTicket.append(ticketTop, ticketBottom);
  appDiv.append(rowTicket);
}
