const http = require('http');

//console.log(http);
//Method 1
const server = http.createServer(function(req, res){
  res.writeHead(200, {
    'Content-type' : 'text/html'
  });
  res.write("Hello");
  res.end("ok");
});

server.listen(9090, function(){
  console.log("Server listenning on port 9090");
});

server.on('connection', function(req, res) {
  console.log("Client connected");
});

server.on('request', function(req, res) {
  res.writeHead(200, {
      'Content-type' : 'text/html'
    });
    res.write("Hello...");
    res.end("ok");
})

 

//Method 2
// http.Server -   inherits from net.Server
// http.IncomingMessage - request (implements Readable Stream & EventEmitters)
// http.ServerResponse - response (implements Writeable Stream & EventEmitters)

 
// const server = new http.Server();
// 
// server.listen(9090, function(){
//   console.log("Server listenning on port 9090");
// });
// 
// server.on('connection', function(req, res) {
//   console.log("Client connected");
// });
// 
// server.on('request', function(req, res) {
//   res.writeHead(200, {
//       'Content-type' : 'text/html'
//     });
//     res.write("Hello...");
//     res.end("ok");
// })
