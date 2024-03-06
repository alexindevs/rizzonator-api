const Rizz = require('../models/rizz.model');

const getAllLines = (req, res) => {
    const data = Rizz.getAllLines();
    const jsonData = JSON.stringify(data);

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(jsonData);
};

const addLine = (req, res, body) => {
    try {
        const data = Rizz.addLine(body.line);
        if (!data) {
            res.writeHead(500, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        const jsonData = JSON.stringify(data);
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(jsonData);
    } catch (error) {
        console.error(error);
        res.writeHead(400, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ error: 'Bad Request' }));
    }
};


const findTheRightLine = (req, res) => {
    const data = Rizz.findTheRightLine();
    const jsonData = JSON.stringify(data);

    // Set the HTTP status code
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    // Send the JSON response
    res.end(jsonData);
};
module.exports = {
    getAllLines,
    addLine,
    findTheRightLine
}