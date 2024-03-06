const rizzJson = require('../data/rizz.json');
const fs = require('fs');

const getAllLines = () => rizzJson

const findTheRightLine = () => {
    const luckyNumber = Math.floor(Math.random() * rizzJson.length);
    return rizzJson[luckyNumber];
}

const addLine = (line) => {
    const lastId = rizzJson[rizzJson.length - 1].id;
    const newLine = {
        id: lastId + 1,
        line
    }
    // We should write to the rizz.json file
    rizzJson.push(newLine);
    fs.writeFileSync('./data/rizz.json', JSON.stringify(rizzJson));
    return newLine;
}

module.exports = {
    getAllLines,
    addLine,
    findTheRightLine
}