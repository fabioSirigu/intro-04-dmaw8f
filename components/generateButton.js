export const generateButton = () => {
  let button = document.createElement('button');
  button.classList.add('my-btn');
  button.innerText = 'Book Now';
  return button;
};
