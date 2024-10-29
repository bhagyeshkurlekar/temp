const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/'){
        res.end('hello world')
    }
    if (req.url == '/about') {
        
    }
})

server.listen(3001)
