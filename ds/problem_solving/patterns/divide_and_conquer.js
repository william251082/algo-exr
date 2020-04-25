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
        let current_element = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else  {
            return middle;
        }
    }

    return -1;
} // O(log(n))
