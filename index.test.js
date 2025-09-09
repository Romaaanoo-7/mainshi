const { add, subtract, multiply, divide, isEven, greet } = require('./index');

describe('Math Functions', () => {
    test('add should return the sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });

    test('subtract should return the difference of two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(0, 5)).toBe(-5);
        expect(subtract(-2, -3)).toBe(1);
    });

    test('multiply should return the product of two numbers', () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 5)).toBe(0);
    });

    test('divide should return the quotient of two numbers', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(9, 3)).toBe(3);
        expect(divide(-6, 2)).toBe(-3);
    });

    test('divide should throw error when dividing by zero', () => {
        expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
});

describe('Utility Functions', () => {
    test('isEven should return true for even numbers', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(4)).toBe(true);
        expect(isEven(0)).toBe(true);
        expect(isEven(-2)).toBe(true);
    });

    test('isEven should return false for odd numbers', () => {
        expect(isEven(1)).toBe(false);
        expect(isEven(3)).toBe(false);
        expect(isEven(-1)).toBe(false);
        expect(isEven(7)).toBe(false);
    });

    test('greet should return personalized greeting', () => {
        expect(greet('John')).toBe('Hello, John!');
        expect(greet('Maria')).toBe('Hello, Maria!');
    });

    test('greet should return default greeting when no name provided', () => {
        expect(greet()).toBe('Hello, World!');
        expect(greet('')).toBe('Hello, World!');
    });
});