// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

console.log(vowels('HELLO'));

module.exports = vowels;

// function vowels(str) {
//     let count = 0;
//     const checker = 'aeiou'; // or ['a','e','i','o','u']
//
//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++;
//         }
//     }
//
//     return count;
// }
//
// console.log(vowels('HELLO'));

// function vowels(str) {
//     let count = 0;
//
//     for (let char of str.toLowerCase()) {
//         if (str.toLowerCase().includes('a')) {
//             count++
//         }
//         if (str.toLowerCase().includes('e')) {
//             count++
//         }
//         if (str.toLowerCase().includes('i')) {
//             count++
//         }
//         if (str.toLowerCase().includes('o')) {
//             count++
//         }
//         if (str.toLowerCase().includes('u')) {
//             count++
//         }
//
//         return count;
//     }
// }
//
// console.log(vowels('HELLO'));
