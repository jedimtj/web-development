const fsPromises = require('fs').promises;
const path = require('path');

const fileOperations = async () => {
    try {
        // Unlike other async read function, this one returns a promise that we can await
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'));
        console.log(data.toString());

        // Has return type promise<void> unlike promise<Buffer> of readFile
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        console.log("Write complete.");
        
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you!');
        console.log("Append complete.");
    } 
    catch (err) {
        console.error("There was an uncaught error:", err);
        process.exit(1);
    }
};

fileOperations();