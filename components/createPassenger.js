export const createPassenger = (number) => {
  const passengersEl = document.createElement('div');
  passengersEl.classList.add('muted');
  passengersEl.innerText = number + ` Adult${number > 2 ? 's' : ''}`;
  return passengersEl;
};
