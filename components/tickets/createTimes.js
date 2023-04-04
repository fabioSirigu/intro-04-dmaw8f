export const createTimes = (time) => {
  const timesEl = document.createElement('div');
  timesEl.classList.add('bolder');
  timesEl.innerText = time;
  return timesEl;
};
