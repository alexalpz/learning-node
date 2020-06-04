var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(express.static(__dirname))       
var http = require('http').Server(app)
var io = require('socket.io')(http)
//^We need to create a regular http server with node to tie socket.io with express.

app.use(express.static(__dirname))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))


var messages = [
    {name:'Alexa', message:'Hi!'},
    {name:'Emily', message:'Hello!'},
]

app.get('/messages',(req,res) => {
    res.send(messages)
})


app.post('/messages',(req,res) => {

    messages.push(req.body)
    res.sendStatus(200)
})

//Checks for connection events
io.on('connection',(socket)=>{
    console.log('A user connected')
})
//We replace our existing listen code for socket.io and express to work.     
//var server = app.listen(3000, ()=> {
    var server = http.listen(3000, ()=> {
    console.log('server is listening on port', server.address().port)
})