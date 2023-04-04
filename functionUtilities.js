//sum total del carrello
export const total = (price1, price2) => {
  const sum = price1 + price2;
  return sum;
};
//click del button "Book Now"
import { singleTicket } from './components/basket/singleTicket.js';

export const addCart = (obj) => {
  const list = document.getElementById('listBasket');
  const totalPrice = document.getElementById('total');

  if (obj) {
    const arrAir = obj.arrivalAirport;
    const depAir = obj.departureAirport;
    const timeArr = obj.departureTime;
    const timeDep = obj.arrivalTime;
    const priceTicket = obj.price;
    const single = singleTicket(depAir, arrAir, timeDep, timeArr, priceTicket);

    list.append(single);
    console.log(list);
  }
};
