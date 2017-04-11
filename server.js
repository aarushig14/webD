/**
 * Created by a.gupta1409 on 11-04-2017.
 */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/',function (req,res) {
    res.sendfile(__dirname+'/index.html');
})
io.on('connection',function (socket) {
    console.log('one user connected');
})
app.listen(8080,function () {
    console.log('server listening on port 3000')
})
