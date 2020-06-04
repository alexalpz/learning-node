var express = require('express')
var app = express()


//express.static(__dirname) specifies page contents being served is static. 
app.use(express.static(__dirname))
var server = app.listen(3000, ()=> {
    console.log('server is listening on port', server.address().port)
})