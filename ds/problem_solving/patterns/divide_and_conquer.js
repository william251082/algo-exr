// // linear search
// function search(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             return i;
//         }
//     }
// } // O(n)

// binary search
// divide in the middle the compare
// repeat
function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        // let current_element = arr[middle];

        if (arr[middle] < val) {
            console.log('curr_el less than val', middle);
            min = middle + 1;
        } else if (arr[middle] > val) {
            console.log('curr_el greater than val', middle);
            max = middle - 1;
        } else  {
            console.log('result', middle);
            return middle;
        }
    }

    return -1;
} // O(log(n))

console.log(search([1,2,3,4,5,6,7,8], 2));
