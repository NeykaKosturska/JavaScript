function toyShop (input){
  let tripPrice = Number (input[0]);
  let numPuzzel = Number (input[1]);
  let numDolls = Number (input[2]);
  let numBers = Number (input[3]);
  let numMinion = Number (input[4]);
  let numTruck = Number (input[5]);
  
  let totalOrderToys = numPuzzel + numDolls + numBers + numMinion + numTruck;
  let sumOrder = (numPuzzel * 2.6) + (numDolls * 3) + (numBers * 4.1) + (numMinion * 8.2) + (numTruck * 2);

  if (totalOrderToys >= 50){
      sumOrder = sumOrder - (sumOrder*(25/100));
  }
  let pay = sumOrder - (sumOrder*(10/100))
  if (pay >= tripPrice){
      let a = Math.abs(pay - tripPrice);
      console.log (`Yes! ${a.toFixed (2)} lv left.`);
  } else {
      let b = Math.abs(tripPrice - pay);
      console.log (`Not enough money! ${b.toFixed(2)} lv needed.`);
  }

  
}
toyShop (["320","8","2","5","5","1"])