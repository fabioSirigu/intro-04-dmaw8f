import { singleTicket } from './components/basket/singleTicket.js';

const newList = [];

export const addToCart = (obj) => {
  if (newList.length < 2) {
    newList.push(obj);
  }

  refreshList(newList);
  // Calcola il prezzo totale del carrello
  const totalPrice = document.getElementById('total');

  let cartTotal = 0;
  newList.forEach((item) => {
    cartTotal += item.price;
  });

  // Aggiorna il prezzo totale nel carrello
  totalPrice.textContent = `€ ${cartTotal.toFixed(2)}`;
};

//refresh list
function refreshList(array) {
  const list = document.getElementById('listBasket');
  list.innerHTML = '';
  for (const item of array) {
    const single = singleTicket(item);
    list.appendChild(single);
  }
}

//time travel
export const calcTravelTime = (timeToString) => {
  const [hours, minutes] = timeToString.toString().split(':');
  return (parseInt(hours) * 60 + parseInt(minutes)) * 60 * 1000;
};

//remove item
export const removeTicket = () => {
  const list = document.getElementById('listBasket');
  list.innerHTML = '';
};
