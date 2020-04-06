// function that accepts sorted array of integers.
// return array containing the first pair where the sum is 0
// or undefined if pairs don't exist
// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }
// // time complexity - O(n^2)
// // space complexity - O(1)
//
//
// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));


// // refactor
// function sumZero(arr){
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             return [arr[left], arr[right]];
//         } else if (sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }
//
// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));


// // implement a function which accepts a sorted array and counts the unique values in the array.
// function countUniqueValues(arr) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i+1; j < arr.length; j++) {
//             console.log(arr[i], arr[j]);
//             if(arr[i] === arr[j]) {
//                 count++;
//             }
//         }
//     }
//      return arr.length - count;
// }
//
// console.log(countUniqueValues([-4,-3,-2,-1,0,1,2,5,-4]));


function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        // move the i pointer when it's not equal to current j
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99]);
console.log(countUniqueValues([-4,-3,-2,-1,0,1,2,5]));
console.log(countUniqueValues([1,2,2,5,7,7,99]));
