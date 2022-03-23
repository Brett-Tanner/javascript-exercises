const repeatString = function(string, n) {
    let stringResult = "";
    
    if (n < 0) return "ERROR";

    for (i = 0; i < n; i++) {
        stringResult = stringResult + string;        
    }
    return stringResult;
};

// Do not edit below this line
module.exports = repeatString;
