//Asynchronouse can run other tasks while the previous one completes. 
function phoneNumber(err, data){        //Callback function
    console.log('data:', data);
}

fs.readdir('c:/',phoneNumber);

console.log("This comes after");