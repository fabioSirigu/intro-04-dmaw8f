import { removeTicket } from '../../functionUtilities.js';
export const singleTicket = ({
  departureAirport,
  arrivalAirport,
  departureTime,
  arrivalTime,
  price,
}) => {
  const ticketEl = document.createElement('div');
  ticketEl.classList.add('singleTicket', 'd-flex');

  //left container
  const leftContainer = document.createElement('div');
  //top left
  const leftTicketTop = document.createElement('div');
  leftTicketTop.classList.add('bolder');
  leftTicketTop.append(`${departureAirport} -> ${arrivalAirport}`);
  //bottom left
  const leftTicketBottom = document.createElement('div');
  leftTicketBottom.classList.add('muted');
  leftTicketBottom.append(`${departureTime} - ${arrivalTime}`);
  //append top-bottom
  leftContainer.append(leftTicketTop, leftTicketBottom);
  //right container
  const rightContainer = document.createElement('div');
  //top right
  const rightTicketTop = document.createElement('div');
  rightTicketTop.classList.add('delete');
  rightTicketTop.setAttribute('id', 'delete');
  const button = document.createElement('button');
  button.classList.add('deleteBtn');
  button.innerText = 'X';
  button.addEventListener('click', function () {
    removeTicket(`${departureAirport}-${arrivalAirport}`);
    let selected = document.getElementById(`${price}`);
    selected.classList.remove('selected');
    let myBtn = document.querySelector('.my-btn');
    myBtn.removeAttribute('disabled');
    myBtn.innerHTML = 'Book Now';
  });
  rightTicketTop.append(button);
  //bottom right
  const rightTicketBottom = document.createElement('div');

  rightTicketBottom.classList.add('bolder');
  rightTicketBottom.append(`€ ${price}`);
  //append top-bottom
  rightContainer.append(rightTicketTop, rightTicketBottom);
  //append left-right
  ticketEl.append(leftContainer, rightContainer);
  return ticketEl;
};
