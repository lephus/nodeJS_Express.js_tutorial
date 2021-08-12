const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    if(req.url === '/about'){
        res.end("Here is our About page")
    }
    res.end('<h1>0ops!</h1>')
})

server.listen(5000)