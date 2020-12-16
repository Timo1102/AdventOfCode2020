var l = require('./loadFile.js');
var data = l.load("./Inputs/d3/data.txt");

console.log(data);

let posX= 0;
let posY= 0;

console.log(data[0]);

const getTile = (text, pos) => {
   return text.charAt(pos% text.length);
}


const move = (x,y, arr) => {
    posY += y;
    posX +=x;
   
    if(posY < data.length) {
        arr.push( getTile(data[posY], posX));
        return true;
    }else{
        return false;
    }
}

// var mX = 1;
// var mY = 1;
// let resultArray = []
// while(move(mX, mY, resultArray)){}

// const b = resultArray.filter(letter => letter == '#').length;

// console.log(b);

//PuzzleTwo

const slopes = [[1,1], [3,1], [5,1], [7,1], [1,2]];

console.log(slopes[1][0]);
let newResult = [];
for (let index = 0; index < slopes.length; index++) {
    let mk = []
    posX = 0;
    posY = 0;
    while(move(slopes[index][0], slopes[index][1], mk)){}
    b = mk.filter(letter => letter == '#').length;
    newResult.push(b);
}
console.log(newResult.reduce((a,b) => a*b));