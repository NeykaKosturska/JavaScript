function concatenateData (input){
    let firstName = (input[0]);
    let familyName = (input[1]);
    let age = (input[2]);
    let town = (input[3]);
    console.log (`You are ${firstName} ${familyName}, a ${age}-years old person from ${town}.`);
}
concatenateData(['Neyka','Kosturska',28,'Kustendil']);