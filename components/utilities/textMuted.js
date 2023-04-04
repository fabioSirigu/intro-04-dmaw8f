export const textMuted = (text) => {
  const textEl = document.createElement('div');
  textEl.classList.add('muted');
  textEl.innerText = text;
  return textEl;
};
