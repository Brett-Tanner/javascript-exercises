const palindromes = function (string) {
    // set the whole thing to lowercase
    string = string.toLowerCase();
    // convert to array
    let array = Array.from(string);
    // filter out punctuation/spaces 
    let filteredArray = array.filter(letter => letter >= "a" && letter <= "z");
    // check remaining letters to see if they're a palindrome 
    try {
    let loop = 0;
    filteredArray.forEach(element => {
        let compareIndex = filteredArray.length - 1 - loop;
        if (element !== filteredArray[compareIndex]) {
            loop = 0;
            throw "BreakError";
        }
        loop++;
    });
    } catch (err) {
        if (err === "BreakError") {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
