var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')

    
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


var dbURL = "mongodb+srv://user:user@learning-node-jcusa.mongodb.net/<dbname>?retryWrites=true&w=majority"


var Message = mongoose.model('Message',{
    name: String,
    message: String
})

//Pulling input messages from db
app.get('/messages',(req,res) => {
    Message.find({},(err,messages)=>{
        res.send(messages)
    })
    
})


app.post('/messages',(req,res) => {
    var message = new Message(req.body)

    message.save((err) =>{
        if(err)
            sendStatus(500)
        //Nested Callbacks. Looking for censored words in me.
        Message.findOne({message:'badword'}, (err, censored)=>{
            //If there is a censored word, console it.
            if(censored){
                console.log('censored words found:', censored)
                //If censored word found, remove it and pass id. Moongose creates id. 
                Message.remove({_id:censored.id}, (err)=>{
                    console.log('Removed censored message')
                })

            }
        })
        io.emit('message', req.body)
        res.sendStatus(200)
    })

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