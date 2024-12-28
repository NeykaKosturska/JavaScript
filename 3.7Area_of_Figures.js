function areaOfFigures (input){
    let shape = (input[0]);
    let area = 0;
    if( shape === 'square'){
        let side = Number (input[1]);
        area = side * side;
    }else if (shape === 'rectangle'){
        let sideA = Number (input[1]);
        let sideB = Number (input[2]);
        area = sideA * sideB;
    }else if (shape === 'circle'){
        let radios = Number (input[1]);
        area = Math.pow(radios,2)*Math.PI;
    }else if ( shape === 'triangle'){
        let sideA = Number (input[1]);
        let highA = Number (input[2]);
        area = (highA * sideA) /2;
    }
    console.log (area.toFixed(2));
}
areaOfFigures (["triangle","4.5","20"]);