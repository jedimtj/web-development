// Creating a simple math module
function preProcess() {
    console.log("Simulating internal work...");
}

const add = (a, b) => {
    preProcess();
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

// Exporting the functions to be used in other files
module.exports = {
    add,
    subtract,
    multiply,
    divide
}