export const setLogo = (url) => {
  let logoEl = document.createElement('img');
  logoEl.src = url;
  logoEl.classList.add('logo');
  return logoEl;
};
