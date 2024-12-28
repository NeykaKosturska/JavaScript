function foodDelivery (input) {
    let chikenMenueCount = Number (input [0]);
    let fishMenueCount = Number (input[1]);
    let vegiMenueCount = Number (input[2]);

    let totalChicken = chikenMenueCount * 10.35;
    let totalFish = fishMenueCount * 12.40;
    let totalVegi = vegiMenueCount * 8.15;
    let totalDiner = totalChicken + totalFish + totalVegi;
    let desert = totalDiner * (20/100);

    let totalSum = totalDiner + desert + 2.5;
    console.log(totalSum);

}
foodDelivery (["2", "4" , "3"]);