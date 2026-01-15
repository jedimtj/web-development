// CommonJS import
const fs = require('fs');
const path = require('path');

// Asynchronous read with a callback function
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

console.log("Hello...");

// This way if we have more async operations that need to be done in a sequence, we keep nesting them inside callbacks
// This is known as "callback hell"
 
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
    if (err) throw err;
    console.log("Write complete.");

    // Way to ensure that append happens after write on same file (since both functions are async)
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes, it is!', (err) => {
        if (err) throw err;
        console.log("Append complete.");
    });
});

// Event listener stays active throughout the lifetime of the process once registered
// Not a scoped error handling construct like try-catch

process.on("uncaughtException", (err) => {
    console.error("There was an uncaught error:", err);
    process.exit(1);
});