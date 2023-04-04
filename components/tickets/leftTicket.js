export const leftTicket = (companyLogo, aircraft, name) => {
  const element = document.createElement('div');

  element.classList.add('d-flex');

  const divRight = document.createElement('div');
  element.append(companyLogo, divRight);
  divRight.append(name, aircraft);
  return element;
};
