/**
 * Streams are objects that let you read data from a source or write data to a destination in continuous fashion.
 * In Node.js, there are four types of streams :
 *
 * Readable − Stream which is used for read operation.
 * Writable − Stream which is used for write operation.
 * Duplex − Stream which can be used for both read and write operation.
 * Transform − A type of duplex stream where the output is computed based on input.
 *
 * */

const fs = require("fs");
const data = "";

// Create a readable stream
const readerStream = fs.createReadStream("input.txt");

// Set the encoding to be utf8.
readerStream.setEncoding("UTF8");

// Handle stream events --> data, end, and error
readerStream.on("data", (chunk) => {
  data += chunk;
});

readerStream.on("end", () => {
  console.log(data);
});

readerStream.on("error", (err) => {
  console.log(err.stack);
});

console.log("Program Ended");
