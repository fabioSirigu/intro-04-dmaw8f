export const setCompany = (company) => {
  let companyEl = document.createElement('div');
  companyEl.classList.add('bolder');
  companyEl.innerText = company;
  return companyEl;
};
