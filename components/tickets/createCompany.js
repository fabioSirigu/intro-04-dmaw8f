export const createCompany = (company) => {
  const companyEl = document.createElement('div');
  companyEl.classList.add('bolder');
  companyEl.innerText = company;
  return companyEl;
};
