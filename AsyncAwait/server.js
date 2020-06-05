var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')

    
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Promise library
mongoose.Promise = Promise

var dbURL = "mongodb+srv://user:user@learning-node-jcusa.mongodb.net/<dbname>?retryWrites=true&w=majority"

//Promises gives us another option for asynchronous code.
//They return an object which promises to do some work.


var Message = mongoose.model('Message',{
    name: String,
    message: String
})


app.get('/messages',(req,res) => {
    Message.find({},(err,messages)=>{
        res.send(messages)
    })
    
})

//To work we await, we need to declare async on a callback
app.post('/messages',async(req,res) => {
    var message = new Message(req.body)

    //Returns a value once finished
    var savedMessage = await message.save()
    //We removed then call
    console.log('saved')
    
    var censored = await Message.findOne({message:'badword'})  

    if(censored)
        await Message.remove({_id:censored.id})
    else 
        io.emit('message', req.body)

    res.sendStatus(200)
/*
.catch((err) =>{
    res.sendStatus(500)
    //Return error message
    return console.error(500)
})

*/
})

io.on('connection',(socket)=>{
    console.log('A user connected')
})

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true}, function(error){ 
    console.log("MongoDB connection.", error); 
});

var server = http.listen(3000, ()=> {
    console.log('server is listening on port', server.address().port)
})