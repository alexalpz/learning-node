const fs = require("fs");

/* Read Text
fs.readFile("./assets/Readme.md","UTF-8",(err, text) =>{
    console.log("file contents read");
    console.log(text);
});


*/

//Reading binary from image
fs.readFile("./assets/alex.jpg",(err, img) =>{
    if(err){
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
});
