const getTheTitles = function(array) {
    let titles = [];
    for (let i = 0, length = array.length; i < length; i++) {
        titles[i] = array[i].title;
    };
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
