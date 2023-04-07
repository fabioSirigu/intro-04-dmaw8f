import { singleTicket } from './components/basket/singleTicket.js';

const state = {
  newList: [],
};

//prendo lo stato attuale di newList
export const getListState = () => {
  return state.newList;
};

export const addToCart = (obj) => {
  //change name button

  if (state.newList.length < 2) {
    state.newList.push({
      ...obj,
      id: `${obj.departureAirport}-${obj.arrivalAirport}`,
    });
  } else {
    alert('xxx');
  }
  console.log(obj);

  refreshUICart();
};

//refresh list
function refreshUICart() {
  const items = getListState();
  const list = document.getElementById('listBasket');
  const totalPrice = document.getElementById('total');
  list.innerHTML = '';
  //il prezzo parte da zero e viene aggiornato quando ci sono elementi
  let cartTotal = 0;
  for (const item of items) {
    const single = singleTicket(item);
    list.append(single);

    // Aggiorna il prezzo totale nel carrello
    cartTotal += item.price;
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
