const http = require('http')
const port = 3000

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello World CST3145\n')
}).listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})