var http = require('http'); //load http module
var server = http.createServer(engine);

server.listen(1337, function (err) {
    console.log("Server was hit by a request");
});
function engine( request, response) {
response.writeHead(200, {'Content-Type': 'text/plain', 'Blaablaa' : 'from bask.com'});
    response.end('Hey there from the server ' + request.url);
    //console.log(response);
}



