const fs = require('fs');

// Append Operation
fs.appendFile('myfile.txt', '\nhello world!', (err)=>{
    if(!err){
        console.log("file is updated");
    }
});