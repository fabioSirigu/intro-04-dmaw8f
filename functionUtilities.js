//sum total del carrello
export const total = (price1, price2) => {
  const sum = price1 + price2;
  return sum;
};
//click del button "Book Now"

export const addCart = (array) => {
  const newArray = [];
  newArray.push(array);
  console.log('new', newArray);
};
