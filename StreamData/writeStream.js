const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt","UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md","UTF-8");

readStream.pipe(writeStream);
/*
readStream.on("data", data =>{
    //Input being written in other file.
    writeStream.write(data);
});


writeStream.write("Hello ");
writeStream.write("World\n");
*/