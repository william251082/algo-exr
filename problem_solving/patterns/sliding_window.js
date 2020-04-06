// find the longest sequence of unique chars
function sequence_of_unique_chars() {

}
console.log('hellothere');



// // naive
// // maximum sum of n consecutive elements in an array
// function maxSubarraySum(arr, num) {
//     if ( num > arr.length){
//         return null;
//     }
//     var max = -Infinity;
//     // make sure it stops in the range of num
//     for (let i = 0; i < arr.length - num + 1; i ++){
//         temp = 0;
//         for (let j = 0; j < num; j++){
//             temp += arr[i + j];
//         }
//         // don't update max if it's less than the current sum
//         if (temp > max) {
//             max = temp;
//         }
//         console.log(temp, max);
//     }
//     return max;
// } // O(n^2)
//
// // maxSubarraySum([2,6,9,2,1,8,5,6,3],3);
// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));


//refactor
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    // create a sum
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // move window up
    for (let i = num; i < arr.length; i++) {
        // subtract the current array's first element to the sum than add the new element
        tempSum = tempSum - arr[i - num] + arr[i];
        // update current max sum
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
} // O(n)

maxSubarraySum([2,6,9,2,1,8,5,6,3],3);


// remove item in array using the value
// var index_of_value_to_be_removed = array.indexOf(value);
// if (index !== -1) array.splice(index, 1);
