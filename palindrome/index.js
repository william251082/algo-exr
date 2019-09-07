function palindrome(str) {
    return str === str
        .split('')
        .every((el, i) => {
            return el === str[str.length - i - 1];
        });
}

module.exports = palindrome;

// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// }