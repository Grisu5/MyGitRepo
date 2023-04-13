const express = require("require"); //reuires the Express module
const http = require("http");

const app = express();

app.use(function(request, response) {           //this is the middleware
    console.log ("In comes a request to:"+ request.url);
    response.end("Hello, World!");

});

http.createServer(app).listen(3000); //starts the server
