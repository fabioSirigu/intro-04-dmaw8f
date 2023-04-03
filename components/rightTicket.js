
export const rightTicket = (price, button) => {
  const element = document.createElement('div');
  element.classList.add('d-flex', 'rightTicket');
  element.append(price, button);
  return element;
};
