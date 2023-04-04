import { flights } from './data';
import './style.css';
//utilities
import { createButton } from './components/utilities/createButton.js';
import { textMuted } from './components/utilities/textMuted.js';
//tickets info
import { createPrice } from './components/tickets/createPrice.js';
import { createTimes } from './components/tickets/createTimes.js';
import { createPassenger } from './components/tickets/createPassenger.js';
import { createCompany } from './components/tickets/createCompany.js';
import { createLogo } from './components/tickets/createLogo.js';
import { topTicket } from './components/tickets/topTicket.js';
import { leftTicket } from './components/tickets/leftTicket.js';
import { rightTicket } from './components/tickets/rightTicket.js';
import { centralTicket } from './components/tickets/centralTicket.js';
import { bottomTicket } from './components/tickets/bottomTicket.js';
//basket import
import { basket } from './components/basket/basket.js';
const basketTot = basket();
//import function
import { addCart } from './functionUtilities.js';
const add = addCart();

let appDiv = document.getElementById('app');

//create a container
const container = document.createElement('container');

//generateRows
for (let i = 0; i < flights.length; i++) {
  const singleFlight = flights[i];
  //info variables
  const title = 'Book Now';
  const button = createButton(title);
  button.classList.add('bookNow');
  button.addEventListener('click', function () {
    const keyValues = Object.entries(singleFlight);
    addCart(keyValues);
    //console.log(keyValues);
    //return keyValues;
  });

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

  container.append(rowTicket);
}

appDiv.append(container, basketTot);
