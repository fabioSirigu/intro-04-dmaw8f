export const generateAirport = (airport) => {
  let airEl = document.createElement('div');
  airEl.classList.add('muted');
  airEl.innerText = airport;
  return airEl;
};
