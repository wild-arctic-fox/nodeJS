/*
 A Node.js application consists of the following three important components −
 * Import required modules − We use the require directive to load Node.js modules.
 * Create server − A server which will listen to client's requests similar to Apache HTTP Server.
 * Read request and return response − The server created in an earlier step will read the HTTP request 
   made by the client which can be a browser or a console and return the response.
*/


// load the http module
const http = require("http");


// create a server instance
http.createServer( (request, response) => {
    // 1)   Send the HTTP header 
    //      HTTP Status: 200 : OK
    //      Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // 2)   Send the response body as "Hello World"
    response.end('Hello Node JS World\n');

    // 3)   bind it at port 8081
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');