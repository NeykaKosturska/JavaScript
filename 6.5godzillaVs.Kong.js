function godzillaVsKong (input){
    let budget = Number (input[0]);
    let walkingGentelmen = Number (input[1]);
    let clothingPrice = Number (input[2]);

    let decore = budget * 0.1;
    if (walkingGentelmen > 150){
        clothingPrice = clothingPrice * 0.9; 
    } 
    let totalCost = decore + (walkingGentelmen * clothingPrice);
    let diff = Math.abs(budget - totalCost);
    
    if (budget >= totalCost){
        console.log ("Action!");
    console.log (`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log ("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed (2)} leva more.`);
    }  
}
godzillaVsKong (["9587.88",
"222",
"55.68"])
