const http = require('http'); 

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.sendDate('Hello World!\n');  // send HTTP response with a simple message  // end response with a newline character
    console.log(`Received request from ${req.connection.remoteAddress}`);  // log the IP address of the client that made the request
   
}) 

server.listen(8083, () => {
    console.log("Server is running on port 8083");  // listens on port 8083 for incoming requests
})
