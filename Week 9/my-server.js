var http = require("http");
function requestHandler (request, response) {
    console.log ("In comes a request to: " + request.url);
    response.end ("Hello, world!");
}
// creating a servers that uses the function we created
var server = http.createServer (requestHandler);
//starting the server on port 5555
server.listen (5555);