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


// refactored
function same(arr1, arr2) {
    // if 2 arr length is different then it's done
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1) {
        // if the square of an element of frequencyCounter1 is not in frequencyCounter2 then it's done
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
} // O(n)

same([1,2,3,2,5], [9,1,4,4,11]);
