function basketballEquipment (input){
    let yearTaxes = Number (input[0]);

    let shoes = yearTaxes - (yearTaxes * (40/100));
    let uniform = shoes - (shoes * (20/100));
    let ball = 0.25 * uniform; 
    let accesoaries = (1/5) * ball;

    let sum = yearTaxes + shoes + uniform + ball + accesoaries;
    console.log (sum);

}
basketballEquipment (["365"]);