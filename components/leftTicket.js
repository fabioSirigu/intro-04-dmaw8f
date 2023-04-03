import { flights } from '../data';
import { textMuted } from './textMuted.js';
import { createCompany } from './createCompany.js';
import { createLogo } from './createLogo.js';

const aircraftType = textMuted(flights[1].aircraftType);
const companyName = createCompany(flights[1].companyName);
const logo = createLogo(flights[1].companyLogo);

const divRight = document.createElement('div');
divRight.append(companyName, aircraftType);

export const leftTicket = () => {
  const element = document.createElement('div');
  element.classList.add('d-flex');
  element.append(logo, divRight);
  return element;
};
