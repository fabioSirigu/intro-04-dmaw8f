import { flights } from './data';
import './style.css';
import { setButton } from './components/setButton.js';
import { setPrice } from './components/setPrice.js';
import { setTimes } from './components/setTimes.js';
import { textMuted } from './components/textMuted.js';
import { setPassenger } from './components/setPassenger.js';
import { setCompany } from './components/setCompany.js';
import { setLogo } from './components/setLogo.js';
import { firstLineTicket } from './components/firstLineTicket.js';
import { leftTicket } from './components/leftTicket.js';

let appDiv = document.getElementById('app');

//const button = setbutton();
//const price = setPrice(flights[1].price);
//const depTimes = setTimes(flights[1].departureTime);
//const arrTimes = setTimes(flights[1].arrivalTime);
//const airportDep = textMuted(flights[1].departureAirport);
//const airportArr = textMuted(flights[1].arrivalAirport);
//const aircraftType = textMuted(flights[1].aircraftType);
//const flightClass = textMuted(flights[1].flightClass);
//const passengers = setPassenger(flights[1].passengers);
const companyName = setCompany(flights[1].companyName);
const logo = setLogo(flights[1].companyLogo);
const firstLine = firstLineTicket();
const left = leftTicket();

firstLine.append(left);
left.append(logo, companyName);
appDiv.appendChild(firstLine);


//console.log('🚀 ~ file: index.js:5 ~ appDiv:', btn);
