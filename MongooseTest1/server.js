var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')

    
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Connecting to MongoDB
var dbURL = "mongodb+srv://user:user@learning-node-jcusa.mongodb.net/<dbname>?retryWrites=true&w=majority"

//Capital letters are models
var Message = mongoose.model('Message',{
    name: String,
    message: String
})


app.get('/messages',(req,res) => {
    //Sending message from mongoDb. Empty object for ALL messages, no requirements. 
    Message.find({},(err,messages)=>{
        res.send(messages)
    })
    
})


app.post('/messages',(req,res) => {
    //For sending data to database. req.body has body definition.
    var message = new Message(req.body)

    //MongoDB
    message.save((err) =>{
        if(err)
            //Server Error
            sendStatus(500)

        //Success Block
        //messages.push(req.body)
        io.emit('message', req.body)
        res.sendStatus(200)
    })

})

io.on('connection',(socket)=>{
    console.log('A user connected')
})

//Connecting to mongoose. Second parameter is to remove deprication warner.
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true}, function(error){ 
    console.log("MongoDB connection.", error); 
});

var server = http.listen(3000, ()=> {
    console.log('server is listening on port', server.address().port)
})