function booksList(input){
    let bookPages = Number (input[0]);
    let pageRead = Number (input[1]);
    let dayToRead = Number (input[2]);
    
    let hours = (bookPages / pageRead) / dayToRead
    console.log (hours)
}

booksList (["212", "20" , "2"])