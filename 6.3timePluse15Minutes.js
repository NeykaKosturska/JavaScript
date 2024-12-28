function timePluse15Minutes (input){
    let inHours = Number (input [0]);
    let inMinutes = Number (input[1]);

    let inTotalMinutes = inHours * 60 + inMinutes;
    let calTotalMinutes = inTotalMinutes + 15;

    let hours = Math.floor(calTotalMinutes / 60);
    let minutes = calTotalMinutes % 60;

    if (hours > 23){
        hours = 0;
    }

    if (minutes < 10){
        console.log (`${hours}:0${minutes}`);
    } else {
        console.log (`${hours}:${minutes}`);
    }

}
timePluse15Minutes (["1" , "46"]);