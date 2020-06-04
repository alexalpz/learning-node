var fs = require('fs');

//For json
var data = {
    name: 'Bob'
};
fs.writeFile('data.json', JSON.stringify(data), (err)=>{
    console.log('Write finished',err)
})