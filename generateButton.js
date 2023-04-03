//import './style.css';

export const generateButton = () => {
  let button = document.createElement('button');
  button.classList.add('my-btn');
  button.innerText = 'click';
  return button;
};
