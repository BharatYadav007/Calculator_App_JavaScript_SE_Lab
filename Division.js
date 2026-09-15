class DivisionModule {
    /**
     * Divides the first number by the second number.
     * @param {number} dividend - The number to be divided
     * @param {number} divisor - The number to divide by
     * @returns {number} The result of the division
     * @throws {Error} If the divisor is zero
     */
    static divide(dividend, divisor) {
        if (divisor === 0) {
            throw new Error("Division by zero error!");
        }
        return dividend / divisor;
    }
}

// Export the module so your team can import it into the main file
export default DivisionModule;
