const server = require('http') 



const createServer = server.createServer(req, res, () => { 
    
    
}) 


createServer.listen(8083, () => {
    console.log('Server is running on port 8001')
    res.writeHead(200, {'Content-Type': 'text/plain'});
})