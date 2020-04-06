// js search methods
// indexOf, includes, find, findIndex

// 1. function that will accept and arr and val
// 2. loop through the array and check if the current array element is equal to the value
function linear_search(arr, val) {
    for (let i=0; i<arr.length; i++) {
        let curr_el = arr[i];
        if (curr_el === val) {
            return i;
        }
    }
    return -1;
} // O(n)

// best O(1)
// average O(n)
// worst O(n)
console.log(linear_search([1,2,3,4,5,6,7,8,9], 9));
