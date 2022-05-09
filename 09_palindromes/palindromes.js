const palindromes = function (string) {
    // set the whole thing to lowercase
    string = string.toLowerCase();
    // convert to array
    const array = Array.from(string);
    // filter out punctuation/spaces 
    const filteredArray = array.filter(letter => letter >= "a" && letter <= "z");
    // check remaining letters to see if they're a palindrome 
    return filteredArray.every((element, index) => {
        let compareIndex = filteredArray.length - 1 - index;
        return filteredArray[compareIndex] === element;
    });
};

// Do not edit below this line
module.exports = palindromes;
