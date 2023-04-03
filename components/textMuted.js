export const textMuted = (text) => {
  let textEl = document.createElement('div');
  textEl.classList.add('muted');
  textEl.innerText = text;
  return textEl;
};
