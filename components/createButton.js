export const createButton = (options) => {
  const button = document.createElement('button');
  button.classList.add('my-btn');
  button.innerText = options.title;
  return button;
};
