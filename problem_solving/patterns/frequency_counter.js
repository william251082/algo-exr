// // naive
// function same(arr1, arr2) {
//     // if 2 arr length is different then it's done
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         // get square of each value
//         let indexToSpliceInArr2 = arr2.indexOf(arr1[i] ** 2); // indexOf is O(n) --it's iterating over the entire arr2
//         // if the square of an element is -1 then it's done
//         if(indexToSpliceInArr2 === -1) {
//             return false;
//         }
//         console.log(indexToSpliceInArr2, arr2);
//         // remove element in arr2
//         // remove the element in the middle of 2 arg index else the last the second index
//         arr2.splice(indexToSpliceInArr2, 1)
//     }
//     return true;
// }
//
// same([1,2,3,2], [9,1,4,4]);


// // refactored
// function same(arr1, arr2) {
//     // if 2 arr length is different then it's done
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for(let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1) {
//         // if the square of an element of frequencyCounter1 is not in frequencyCounter2 then it's done
//         if(!(key ** 2 in frequencyCounter2)) {
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//             return false
//         }
//     }
//     return true
// } // O(n)
//
// same([1,2,3,2,5], [9,1,4,4,11]);


// valid anagram
// use frequency counter
// function validAnagram(str1, str2) {
//     if(str1.length !== str2.length || str1 === "" || str2 === ""){
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for(let val of str1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for(let val of str2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for (let el1 in frequencyCounter1) {
//         // console.log('el1', el1)
//         for (let el2 in frequencyCounter2) {
//             console.log('el1', frequencyCounter1[el1], 'el2', frequencyCounter2[el2])
//             if (frequencyCounter1[el1] !== frequencyCounter2[el2]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
//
// console.log(validAnagram('qwerty', 'ytrewq'));


function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup);

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram('anagrams', 'nagaramm'));
