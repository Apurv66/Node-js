const fs = require('fs');

// Read Operation
fs.readFile('myfile.txt', (err, item)=>{
    console.log(item.toString());
});