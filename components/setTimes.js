export const setTimes = (time) => {
  let timesEl = document.createElement('div');
  timesEl.classList.add('bolder');
  timesEl.innerText = time;
  return timesEl;
};
