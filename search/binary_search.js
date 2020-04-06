function binary_search(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let midpoint = Math.floor((left + right) / 2);

        // if value is too small move left pointer up
        if (arr[midpoint] < val) {
            left = midpoint + 1;
            // if value is too large move right pointer down
        } else if (arr[midpoint] > val) {
            right = midpoint - 1;
            // if value is found
        } else  {
            return midpoint;
        }
    }

    // never found the value
    return -1;
} // O(log(n))


// best O(1)
// worst and average O(log n)

console.log(binary_search([1,2,3,4,5,6,7,8,9], 9));
