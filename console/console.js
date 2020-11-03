const fs = require('fs');
const { Console } = require('console');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

// custom simple logger
const logger = new Console(output, errorOutput);

const count = 5;
logger.log('count: %d', count);
// in stdout.log

logger.error(new Error("test error"));
// in stderr.log