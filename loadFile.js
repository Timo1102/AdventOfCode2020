var fs = require('fs');
module.exports.load = (fileName, c) => {

    var data = fs.readFileSync(fileName);

    // fs.readFile(fileName, function (err, data) {
    //     if (err) {
    //       throw err; 
    //     }
        
    // });
    return data.toString().split(/\r?\n/);
};
