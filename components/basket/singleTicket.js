export const singleTicket = (airDep, airArr, timeDep, timeArr, price) => {
  const ticketEl = document.createElement('div');
  ticketEl.classList.add('singleTicket', 'd-flex');
  ticketEl.setAttribute('id', 'singleTicket');
  //left container
  const leftContainer = document.createElement('div');
  //top left
  const leftTicketTop = document.createElement('div');
  leftTicketTop.classList.add('bolder');
  leftTicketTop.append(`${airDep} -> ${airArr}`);
  //bottom left
  const leftTicketBottom = document.createElement('div');
  leftTicketBottom.classList.add('muted');
  leftTicketBottom.append(`${timeDep} - ${timeArr}`);
  //append top-bottom
  leftContainer.append(leftTicketTop, leftTicketBottom);
  //right container
  const rightContainer = document.createElement('div');
  //top right
  const rightTicketTop = document.createElement('div');
  rightTicketTop.classList.add('delete');
  rightTicketTop.innerText = 'X';
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
