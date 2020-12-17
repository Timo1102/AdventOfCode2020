const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
var fs = require('fs');

var dataString = fs.readFileSync("./INputs/d4/data.txt").toString();

const data = dataString.split("\n\r");

const toObj = (a) => {
    const nO = a.split(/\s+/).reduce((ac, cur, i) => {
        var prop = cur.substring(0, cur.indexOf(":"));
        var value = cur.substring(cur.indexOf(":")+1, cur.lenght);
        if(prop) {
            ac[prop] = value;
        }
        return ac;
    }, {});
    return nO;
}
var checkPropertie = [ "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].sort();

var all = data.map(toObj);

var includes = (d) => {
    var props = Object.getOwnPropertyNames(d);
    var a = checkPropertie.every(r => props.includes(r));
   return a;
} 

const validate = (a) => {
    const hgtType = a.hgt.slice(-2);
    const checkHGT = {
        "cm": [150, 193],
        "in": [59, 76]
    };
    const isHgtValid  = (h) => {
        if(hgtType === "cm" || hgtType === "in") {
            var w = a.hgt.substring(0, a.hgt.length-2);
            const val = checkHGT[hgtType];
            return (w >= val[0] && w<val[1]);
        }else {
            return false;
        }
    }


    const checkEcl = ["amb", "blu" ,"brn", "gry","grn", "hzl", "oth"];
    return ob = {
        byr: a.byr >= 1920 && a.byr <= 2012,
        iyr: a.iyr >= 2010 && a.iyr <= 2020,
        eyr: a.eyr >= 2020 && a.eyr <= 2030,
        hgt: isHgtValid(a.hgt),
        hcl: a.hcl.match(/^#[0-9a-f]{6}$/i) != null,
        ecl: checkEcl.includes(a.ecl),
        pid: a.pid.match(/^[0-9]{9}$/) != null,
    };
    
}

const runValidation = (a) => {
    return  !Object.values(a).filter(x => x == false).length > 0;
}

// const check = all.map(includes).filter(x => x).length;

// console.log(check);

//second puzzle
 const result = all.filter(x => includes(x));
const valid = result.map(validate).map(runValidation);

console.log(valid);
//console.log(runValidation(validate(result[0])));
//console.log(runValidation(valid(result[0])));


console.log(valid.filter(x => x == true).length);
 