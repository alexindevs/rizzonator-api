const RizzCOntroller = require('../controllers/rizz.controller');
const path = require('path');

module.exports = (req, res) => {
    switch (path.basename(req.url)) {
        case "pick-one":
            if (req.method === "GET") {
                RizzCOntroller.findTheRightLine(req, res);
            }
            break;
        case "all-lines":
            if (req.method === "GET") {
                RizzCOntroller.getAllLines(req, res);
            }
            break;
        case "add-line":
            if (req.method === "POST") {
                res.writeHead(403, {
                    'Content-Type': 'text/plain'
                })
                res.end("Um, You don't have write privileges!")
                // let body = [];
                // req.on('data', chunk => {
                //     body.push(chunk);
                // });
                // req.on('end', () => {
                //     const parsedBody = JSON.parse(Buffer.concat(body).toString());
                //     RizzCOntroller.addLine(req, res, parsedBody);
                // });
            }
            break;
        default:
            console.log(path.basename(req.url))
            res.statusCode = 404;
            res.end(`/${path.basename(req.url)} not found in rizzgen, bro.`);
    }
};
