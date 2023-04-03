import { flights } from './data';
import './style.css';
import { generateButton } from './generateButton.js';

let appDiv = document.getElementById('app');

const button = generateButton();

appDiv.appendChild(button);

console.log('🚀 ~ file: index.js:5 ~ appDiv:', btn);
