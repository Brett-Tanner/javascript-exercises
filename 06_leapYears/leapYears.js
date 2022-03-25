const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
        else if (year % 400 === 0) {
            return true;
        }
        else {
            return false;
        }
};

// divisible by 4 = true, not divisible by 100 = true
// divisible by 400 = true
// else false

// Do not edit below this line
module.exports = leapYears;
