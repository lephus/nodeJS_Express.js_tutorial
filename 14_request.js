const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Home page")
    }
    if(req.url === '/sayHello'){
        // BLOCKING CODE 
        res.end("Hello page")
    }
})

server.listen(5000, ()=>{
    console.log('server listening on port 5000...')
})