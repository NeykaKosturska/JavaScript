function deposit (input){
    let moneyIn = Number (input[0]);
    let time = Number (input[1]);
    let intrest = Number (input[2]);
    let totalIntrestForYear = moneyIn * (intrest/100);
    let totalIntrestForMonth = totalIntrestForYear / 12;
    let totalAmount = moneyIn + (time*totalIntrestForMonth);

    console.log (totalAmount);
}
deposit (['200','3','5.7']);