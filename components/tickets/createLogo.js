export const createLogo = (url) => {
  const logoEl = document.createElement('img');
  logoEl.src = url;
  logoEl.classList.add('logo');
  return logoEl;
};
