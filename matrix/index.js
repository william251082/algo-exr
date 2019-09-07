// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];

    // making the an empty associative array that has n elements
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    // loop through the whole rows and columns
    while (startColumn <= endColumn && startRow <= endRow) {
        // iterate through top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // iterate through right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // iterate through bottom row, start to decrement the end row
        for (let i = endColumn; i >= startColumn; i-- ) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // iterate through start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }

    return results;
}

console.log(matrix(4));

module.exports = matrix;
