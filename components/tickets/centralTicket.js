export const centralTicket = (
  departureTime,
  arrivalTime,
  airportDeparture,
  airportArrival
) => {
  const element = document.createElement('div');
  element.classList.add('d-flex');

  const divLeft = document.createElement('div');
  divLeft.append(departureTime, airportDeparture);

  const divCenter = document.createElement('div');

  divCenter.innerText = '1:40';

  const divRight = document.createElement('div');
  divRight.append(arrivalTime, airportArrival);
  element.append(divLeft, divCenter, divRight);
  return element;
};
