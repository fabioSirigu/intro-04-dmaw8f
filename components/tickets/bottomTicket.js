const flightDetails = 'Flight Details';
export const bottomTicket = (classFlight, passengers) => {
  const element = document.createElement('div');
  element.classList.add('bottomTicket');
  element.append(classFlight, passengers, flightDetails);
  return element;
};
