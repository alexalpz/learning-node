var fs = require ('fs') //Gives access to file system.
fs.readdir('c:/',(err,data)=> {         //readdir is function for fs
    console.log(data)
})