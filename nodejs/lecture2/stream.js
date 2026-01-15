const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), {
    // options
    encoding: 'utf8'
});

const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newLorem.txt'));
const ws2 = fs.createWriteStream(path.join(__dirname, 'files', 'newLorem2.txt'));

// Event 'data' is emitted when a chunk of data is available to read
// Better than readFile (which reads entire file at once) to keep memory usage low for large files

rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
});

// Option 2- Pipe read stream to write stream directly
// High-level convenience method, handles backpressure automatically
rs.pipe(ws2);