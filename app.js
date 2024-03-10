const http = require("http");
const parse = require("url").parse;
const path = require("path");

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specified HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specified headers

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    const { pathname } = parse(req.url);
    const route = pathname.split("/")[1];

    switch (route) {
        case 'rizzgen':
            require('./routes/rizz.routes')(req, res);
            break;
        default:
            res.statusCode = 404;
            res.end('URL not found, lol.');
            break;
    }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))