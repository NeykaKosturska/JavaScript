function suppliesForSchool (input){

    let penNum = Number (input[0]);
    let markerNum = Number (input[1]);
    let cleningLitre = Number (input[2]);
    let discount = Number (input[3]);

    let total = (penNum * 5.8) + (markerNum * 7.2) + (cleningLitre * 1.2)
    let totalDiscount = total * (discount/100)
    let finalPrice = total - totalDiscount

    console.log (finalPrice);

}
suppliesForSchool (["2" , "3", "4" , "25"] )