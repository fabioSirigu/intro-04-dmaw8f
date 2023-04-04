export const totalSection = (total) => {
  const topContainer = document.createElement('div');
  topContainer.classList.add('totalContainer', 'd-flex');
  //left
  const leftTotal = document.createElement('div');
  leftTotal.classList.add('bolder');
  leftTotal.innerText = 'Cart';

  //right container
  const rightTotal = document.createElement('div');
  rightTotal.classList.add('bolder');
  rightTotal.classList.add('id', 'total');
  rightTotal.append(`€ ${total}`);

  //append left-right
  topContainer.append(leftTotal, rightTotal);
  return topContainer;
};
