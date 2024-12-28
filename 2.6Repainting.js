function Repainting (input){
    let cover = Number (input[0]);
    let pain = Number (input[1]);
    let coreselin = Number (input[2]);
    let hours = Number (input[3]);
    let totalPain = pain + (pain * (10/100));
    let totalCover = cover + 2;
    let totalMaterials = (totalCover * 1.5) + (totalPain * 14.5) + (coreselin * 5) + 0.4 ;
    let hoursPrice = hours * (totalMaterials * (30/100));
    let totalSum = totalMaterials + hoursPrice

    console.log (totalSum);

}
Repainting (["10", "11" , "4" , "8"])