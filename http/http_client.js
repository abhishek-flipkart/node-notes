const http = require('http');


const request = http.request({
  {hostname : 'www.google.com', method : 'GET'},
  function(response){
    console.log(response)
  }
});

request.on('error', function(err){
  
})