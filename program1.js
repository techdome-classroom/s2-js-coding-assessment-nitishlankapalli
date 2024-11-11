/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];

    for (let char of s) {
        if (char in matchingBrackets) {

            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (matchingBrackets[char] !== topElement) {
                return false;
            }
        } else {

            stack.push(char);
        }
    }


    return stack.length === 0;
};

module.exports = { isValid };


