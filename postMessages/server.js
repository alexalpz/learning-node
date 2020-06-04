//Creating express application
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname))
//We expect json coming it with http request
app.use(bodyParser.json())

//What comes from browser is URL encoded, so must be able to support it. 
app.use(bodyParser.urlencoded({extended: false}))


//This stores the messages 
var messages = [
    {name:'Alexa', message:'Hi!'},
    {name:'Emily', message:'Hello!'},
]
//Requesting data from server
app.get('/messages',(req,res) => {
    res.send(messages)
})

//Sending data from server
app.post('/messages',(req,res) => {
    //This would appear as "undefined" without the package. 
    //console.log(req.body)
    //Add new message to messages array. 
    messages.push(req.body)
    //200 OK header message
    res.sendStatus(200)
})

app.use(express.static(__dirname))              //express.static(__dirname) specifies page contents being served is static. 
var server = app.listen(3000, ()=> {
    console.log('server is listening on port', server.address().port)
})