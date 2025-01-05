const fs = require('fs');

// Rename Operation
fs.rename('myfile.txt', 'newfile.txt', (err)=>{
    if(!err){
        console.log("file name is updated");
    }
});