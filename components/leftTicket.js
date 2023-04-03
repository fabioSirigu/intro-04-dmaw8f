import { flights } from './data';

import { setCompany } from './components/setCompany.js';
import { setLogo } from './components/setLogo.js';
import { textMuted } from './components/textMuted.js';

const companyName = setCompany(flights[1].companyName);
const logo = setLogo(flights[1].companyLogo);
const aircraftType = textMuted(flights[1].aircraftType);


export const leftTicket = () => {
  let element = document.createElement('div');
  element.classList.add('d-flex');
  return element;
};


