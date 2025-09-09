/**
 * Simple utility functions for testing demonstration
 */

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

function isEven(num) {
    return num % 2 === 0;
}

function greet(name) {
    if (!name) {
        return 'Hello, World!';
    }
    return `Hello, ${name}!`;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    isEven,
    greet
};