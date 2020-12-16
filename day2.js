var l = require('./loadFile.js');
var data = l.load("./Inputs/d2.txt");


const toInt = (a) => {
    return a.split('-').map((a) => {
        return parseInt(a);
    });
};
    
const validPuzzleOne = (g) => {
    var regExp = new RegExp(g.l, "gi");

    const count = (g.c.match(regExp) || []).length
    if(count >= g.d[0] && count <= g.d[1]){
        return true;
    }else {
        return false;
    }
};

const validPuzzleTwo = (g) => {
    var firstPos = g.c.charAt(g.d[0]-1);
    var secondPos = g.c.charAt(g.d[1]-1);
    if(firstPos === g.l && secondPos !== g.l || firstPos !== g.l && secondPos === g.l){
        return true;
    }else {
        return false;
    }
};

const isValid = (newData, checkFunc) => {
    const t = newData.split(" ");
    const w = {
        "d" : toInt(t[0]),
         l : t[1].charAt(0),
         c : t[2],
    }
    return checkFunc(w);
}

// const r = data.map((a) => {
//    return isValid(a, validPuzzleOne);
// });
// const countT = r.filter(g => g);
// console.log(countT.length);
//Puzzle Two
const r = data.map((a) => {
   return isValid(a, validPuzzleTwo);
});
console.log(r);
const countT = r.filter(g => g);
console.log(countT.length);