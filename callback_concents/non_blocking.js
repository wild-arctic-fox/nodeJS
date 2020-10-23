const fs = require("fs");

fs.readFile('callback_concents/input.txt', (err, data) => {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended\n");

////////////////////////////////////
// OUTPUT

// Program Ended

// Callback is an asynchronous equivalent for a function.
// A callback function is called at the completion of a given task.
// Node makes heavy use of callbacks.
// All the APIs of Node are written in such a way that they support callbacks.

