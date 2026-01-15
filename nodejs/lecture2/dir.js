const fs = require('fs');
const path = require('path');

try {
    if (!fs.existsSync(path.join(__dirname, 'newDir'))) {
        fs.mkdirSync(path.join(__dirname, 'newDir'));
        console.log("Directory created.");
    }

    if (fs.existsSync(path.join(__dirname, 'newDir'))) {
        fs.rmdirSync(path.join(__dirname, 'newDir'));
        console.log("Directory removed.");
    }
}
catch (err) {
    console.error("Error handling directories:", err);
    process.exit(1);
}