const net = require('net');
const config = require('./config');

//Method 1
// const client = net.createConnection(config, function(x){
//     console.log("Connection created");
//     client.write('world!\r\n');
// });
// 
// client.on('connect', function(s) {
//   console.log("Connected to server");
// })
// 
// client.on('data', function(data) {
//   console.log("Data :" + data.toString());
// })


//Method 2
const client = new net.Socket();
client.connect(config, function(){
  console.log("Client connection gets created");
}).on('connect', function(){
  console.log("Connection successfull");
  client.write('world!\r\n');
}).on('data', function(data) {
  console.log("Data :" + data.toString());
});


