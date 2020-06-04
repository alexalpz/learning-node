//Creating express application
var express = require('express')
var app = express()

//This stores the messages 
var messages = [
    {name:'Alexa', message:'Hi!'},
    {name:'Emily', message:'Hello!'},
]
//Requesting data from variable
app.get('/messages',(req,res) => {
    res.send(messages)
})

app.use(express.static(__dirname))              //express.static(__dirname) specifies page contents being served is static. 
var server = app.listen(3000, ()=> {
    console.log('server is listening on port', server.address().port)
})