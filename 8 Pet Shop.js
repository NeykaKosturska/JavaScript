function petShop(input){
    let dogFoodPrice = 2.5;
    let catFoodPrice = 4;
    let dogFoodBag = Number(input[0]);
    let catFoodBag = Number(input[1]);
    let totalPrice = (dogFoodPrice * dogFoodBag) + (catFoodPrice * catFoodBag);
    console.log (`${totalPrice} lv.`);
}
petShop(['5','4']);