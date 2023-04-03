import { flights } from './data';
import './style.css';
import { generateButton } from './components/generateButton.js';
import { generatePrice } from './components/generatePrice.js';
import { generateTimes } from './components/generateTimes.js';
import { generateAirport } from './components/generateAirport.js';

let appDiv = document.getElementById('app');

//const button = generateButton();
//const price = generatePrice(flights[1].price);
//const depTimes = generateTimes(flights[1].departureTime);
//const arrTimes = generateTimes(flights[1].arrivalTime);
//const airportDep = generateAirport(flights[1].departureAirport);
const airportArr = generateAirport(flights[1].arrivalAirport);

appDiv.appendChild(airportArr);

//console.log('🚀 ~ file: index.js:5 ~ appDiv:', btn);
