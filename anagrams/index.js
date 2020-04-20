// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str
        .replace(/[^\w]/g, "")
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

console.log(anagrams('rail safety', 'fairy tales'));

module.exports = anagrams;

// [ and ] are the start and end of a character set.
// \W means "non-word", as opposed to \w which will match a word.
//     _ is the "_" character.
// / mark the beginning and end of a regular expression.
// g means it's a global search.


// function anagrams(stringA, stringB) {
//     // replace special chars with empty string
//     const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     const strB = stringB.replace(/[^\w]/g, "").toLowerCase();
//     const charMapA = {};
//     const charMapB = {};
//
//     for (let char of strA) {
//         charMapA[char] = charMapA[char] + 1 || 1;
//     }
//
//     const orderedA = {};
//     Object.keys(charMapA).sort().forEach(function(key) {
//         orderedA[key] = charMapA[key];
//     });
//
//     for (let char of strB) {
//         charMapB[char] = charMapB[char] + 1 || 1;
//     }
//
//     const orderedB = {};
//     Object.keys(charMapB).sort().forEach(function(key) {
//         orderedB[key] = charMapB[key];
//     });
//
//     return JSON.stringify(orderedA) === JSON.stringify(orderedB);
// }
//
// console.log(anagrams('rail safety', 'fairy tales'));

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMaps(stringA);
//     const bCharMap = buildCharMaps(stringB);
//
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }
//
//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//
//     return true;
// }
//
// function buildCharMaps(str) {
//     const charMap = {};
//
//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//
//     return charMap;
// }
//
// console.log(anagrams('rail safety', 'fairy tales'));
