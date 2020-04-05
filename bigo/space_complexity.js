function sum(arr) {
    let total = 0; // one number
    // i is another number
    for (let i= 0; i < arr.length; i++) {
        total += arr[i]
    }
} // O(1) space


function double(arr) { // arr is n
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        new_arr.push(2*arr[i]);
    }
    return new_arr;
} // O(n) space
