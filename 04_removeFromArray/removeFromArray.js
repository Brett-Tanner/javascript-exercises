const removeFromArray = function(array, ...removedValues) {
    return array.filter((element) => {
        // Checks the current array element against each element of the removedValues array, returns false if they're equal
        for (i = 0; i < removedValues.length; i++) {
            if (element === removedValues[i]) {
                return false;
            } 
        }
        // Returns true if no equal values are found, filtering the element into the new array
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
