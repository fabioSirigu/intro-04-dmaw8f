import { singleTicket } from './components/basket/singleTicket.js';

const newList = {
  item: [],
};

export const addToCart = (obj) => {
  const totalPrice = document.getElementById('total');
  const list = document.getElementById('listBasket');

  const single = singleTicket(obj);
  //console.log(single);
  if (newList.item.length < 2) {
    console.log(newList.item.length);
    newList.item.push(obj);
    list.append(single);
  }
  // Calcola il prezzo totale del carrello
  let cartTotal = 0;
  newList.item.forEach((item) => {
    cartTotal += item.price;
  });

  // Aggiorna il prezzo totale nel carrello
  totalPrice.textContent = `€ ${cartTotal.toFixed(2)}`;

  console.log(newList.item);
};

//time to string per il tempo di volo
/* export const calcTravelTime = (departure, arrival) => {
  const dep = parseFloat(departure.replace(':', '.'));
  const arr = parseFloat(arrival.replace(':', '.'));

  const traveltime = String((arr - dep).toFixed(2));
  const splicedTime = traveltime.split('.');
  return { hours: splicedTime[0], minutes: splicedTime[1] };
}; */

/* export const removeTicket = (index) => {
  // Rimuovi l'elemento dal carrello
  newList.item.splice(index, 1);

  // Aggiorna il prezzo totale del carrello
  let cartTotal = 0;
  newList.item.forEach((item) => {
    cartTotal += item.price;
  });
  const totalPrice = document.getElementById('total');

  totalPrice.textContent = cartTotal.toFixed(2);
}; */
