var express = require('express')
var app = express()

//express.static(__dirname) specifies page contents being served is static. 
app.use(express.static(__dirname))

var messages = [
    {name:'Alex', message:'Hello :)'},
    {name:'Emily', message:'Hey!'}
]
//Can see in URL http://localhost:3000/messages
/*app.get('/messages',(req, res) =>{
    res.send('Hello')
})
*/
app.get('/messages',(req, res) =>{
    res.send(messages)
})

var server = app.listen(3000, ()=> {
    console.log('server is listening on port', server.address().port)
})