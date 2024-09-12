const server = require('http') 



const createServer = server.createServer((req, res) => {  
    console.log("server created and listening on port we can get responses") 
    const url = req.url 
    const method = req.method
    if (url === "/") {
        if (method === "GET") {
            res.write("WELCOME TO HOME PAGE")
       
        } else {
            res.end("BAD REQUEST")
        }
    } else {
        res.end("ok ok")
    }
   

    
    
    
}) 

createServer.listen(8083, () => {
    console.log( "server listening on port")
})
