function fishTank (input){
    let lenght = Number(input [0]);
    let wide = Number (input[1]);
    let high = Number (input[2]);
    let procent = Number (input[3]);

    let volume = lenght * wide * high;
    let volumeLitres = volume * 0.001;
    let needWather = volumeLitres * (1-(procent/100));

    console.log (needWather);

}
fishTank (["85", "75" , "47" , "17"])