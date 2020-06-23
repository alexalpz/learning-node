const fs = require("fs");

if (fs.existsSync("storage-files")){
    console.log("This directory already exists");
}
else {
    fs.mkdir("storage-files", err => {
        if (err){
            throw err;
        }
        console.log("Directory Created");
    });
}