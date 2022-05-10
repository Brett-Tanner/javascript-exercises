const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) {
        return "OOPS";
    }
    let twoBefore = 0;
    let oneBefore = 0;
    let result = 1;
    for (i = 1; i < n; i++) {
        result = twoBefore + oneBefore;
        twoBefore = oneBefore;
        oneBefore = result;
    };
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
