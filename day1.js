var l = require('./loadFile.js');
var data = l.load("./Inputs/d1.txt");


partOne = (ar) => {
      for (let i = 0; i < ar.length; i++) {
          for (let j = 0; j < ar.length-1; j++) {
              let a = parseInt(ar[i]);
              let b = parseInt(ar[j]);
            if(a + b == 2020){
                console.log(a, b);
                var r = a*b;
                console.log("Result is ", r);
            }
          }
       
    }
};

partTwo = (ar) => {
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length-1; j++) {
            for (let k = 0; k < ar.length; k++) {
                let a = parseInt(ar[i]);
                let b = parseInt(ar[j]);
                let c = parseInt(ar[k]);
              if(a + b + c == 2020){
                  console.log(a, b, c);
                  var r = a*b*c;
                  console.log("Result is ", r);
              }
            }

         
        }
  }
}


partOne(data);
//partOne(ar);
//partTwo(ar);
