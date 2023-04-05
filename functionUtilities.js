import { singleTicket } from './components/basket/singleTicket.js';

const state = {
  newList: [],
};

//prendo lo stato attuale di newList
export const getListState = () => {
  return state.newList;
};

export const addToCart = (obj) => {
  if (state.newList.length < 2) {
    state.newList.push({
      ...obj,
      id: `${obj.departureAirport}-${obj.arrivalAirport}`,
    });
  }
  console.log(obj);

  refreshUICart();
  // Calcola il prezzo totale del carrello
  /*   const totalPrice = document.getElementById('total');

  let cartTotal = 0;
  state.newList.forEach((item) => {
    cartTotal += item.price;
  });

  // Aggiorna il prezzo totale nel carrello
  totalPrice.textContent = `€ ${cartTotal.toFixed(2)}`; */
};

//refresh list
function refreshUICart() {
  const items = getListState();
  const list = document.getElementById('listBasket');
  const totalPrice = document.getElementById('total');
  list.innerHTML = '';
  let cartTotal = 0;
  for (const item of items) {
    const single = singleTicket(item);
    list.append(single);

    cartTotal += item.price;

    // Aggiorna il prezzo totale nel carrello
  }
  totalPrice.textContent = `€ ${cartTotal.toFixed(2)}`;
}

//time travel
export const calcTravelTime = (timeToString) => {
  const [hours, minutes] = timeToString.toString().split(':');
  return (parseInt(hours) * 60 + parseInt(minutes)) * 60 * 1000;
};

//remove item
export const removeTicket = (ticketId) => {
  state.newList = state.newList.filter(({ id }) => id !== ticketId);
  refreshUICart();
};
