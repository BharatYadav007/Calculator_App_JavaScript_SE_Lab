function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero error!");
    }
    return a / b;
}

module.exports = divide;
