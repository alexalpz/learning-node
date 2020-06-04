//Reading disc access
var fs = require('fs')
var data = require ('./data.json')

//console.log(data)
console.log(data.name)            //name function pulls name from object. This is an object.

//Read from the file function. Second parameter specifies format. Third is the callback. 
fs.readFile('./data.json', 'utf-8', (err,data)=> {
    var data = JSON.parse(data)  //This is taking original data parameter, converting it to JSON  then an object. 
    //console.log(data)         //data.name shows it's just a string with undefined.
    console.log(data.name)  
})
