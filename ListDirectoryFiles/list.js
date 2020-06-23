const fs = require("fs");


fs.readdir("./assets",(err, files) =>{
    //When files are read, this will invoke. 
    //Stop process
    if(err){
        throw err;
    }
    
    console.log("Complete");
    console.log(files);
});

console.log("Started reading files");