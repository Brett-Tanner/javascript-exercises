const sumAll = function(num1, num2) {
    // accumulator variable
    let runningTotal = 0;
    // checks if either parameter is negative or NaN, returns ERROR if so. Used typeof rather than isNaN() because isNaN maybe converts strings first??
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }
        else if (num1 < num2) {
            for (i = num1; i <= num2; i++) {
                runningTotal += i;
            }
        }
        else {
            for (i = num1; i >= num2; i--) {
                runningTotal += i;
            }
        }
    return runningTotal;
};

// Do not edit below this line
module.exports = sumAll;
