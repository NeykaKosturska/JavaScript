function projectsCreation (input){
    let name = (input[0]);
    let a = 3;
    let projectsNumber = Number(input[1]);
    let projectsTime = a * (input[1]); 
    console.log (`The architect ${name} will need ${projectsTime} hours to complete ${projectsNumber} project/s.`);
}
projectsCreation(["George ","4 "])