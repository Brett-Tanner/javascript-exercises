const findTheOldest = function(array) {
    return array.reduce(function(previousValue, currentValue) {
        let previousAge;
        let currentAge;
        const currentYear = new Date().getFullYear();
        if (previousValue.yearOfDeath === undefined) {
            previousAge = currentYear - previousValue.yearOfBirth;
        }
        else {
            previousAge = previousValue.yearOfDeath - previousValue.yearOfBirth;
        };
        if (currentValue.yearOfDeath === undefined) {
            currentAge = currentYear - currentValue.yearOfBirth;
        }
        else {
            currentAge = currentValue.yearOfDeath - currentValue.yearOfBirth;
        };
        if (currentAge > previousAge) {
            return currentValue;
        }
        else {
            return previousValue;
        };
    })
};

// Do not edit below this line
module.exports = findTheOldest;
