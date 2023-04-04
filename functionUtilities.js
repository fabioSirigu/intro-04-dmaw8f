//sum total del carrello
export const total = (price1, price2) => {
  const sum = price1 + price2;
  return sum;
};

//click del button "Book Now"
import { singleTicket } from './components/basket/singleTicket.js';

const newList = {
  item: [],
};

export const addToCart = (obj) => {
  // update newList
  //newList.item.push(obj);
  // refresh UI

  //const totalPrice = document.getElementById('total');
  const list = document.getElementById('listBasket');

  const single = singleTicket(obj);
  //console.log(single);
  if (newList.item.length < 2) {
    console.log(newList.item.length);
    newList.item.push(obj);
    list.append(single);
  }

  console.log(newList.item);
};
