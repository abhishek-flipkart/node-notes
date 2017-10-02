const net = require('net');
const config = require('./config');
//console.log(net);

//Method 1
// const server = net.createServer(function(socket) {
//   socket.on('data', function(data){
//     console.log(data.toString());
//     socket.write("Data from server : " + data, 'utf-8')
//   }); 
// });
// server.on('connection', function() {
//   console.log("Client connected");
// }).listen(config, function(){
//   console.log("Server listening on port 8090");
// });


//Method 2
const server = new net.Server();

server.on('connection', function(socket){
  socket.on('data', function(data){
    console.log(data.toString());
    socket.write("Data from server : " + data, 'utf-8')
  });
}).listen(config, function(){
  console.log("Server listening on port 8090");
});