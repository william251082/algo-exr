// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1)/2);

    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add)
}

pyramid(10);

// calculate the midpoint
// const col = [0,1,2,3,4];
// const row = 0;
//
// Math.floor((2 * n - 1)/2); // 2

// relations between row and n
// 2n -1 = row
// n = 2, row = 3
// n = 3, row = 5

// // left hand side
// midpoint - row <= col
// // right hand side
// midpoint + row >= col

module.exports = pyramid;

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1)/2);
//
//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let col = 0; col < 2 * n - 1; col++) {
//             if (midpoint - row <= col && midpoint + row >= col) { // make sure that current column is in bounds of midpoint - row and midpoint + row
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }
//
// pyramid(10);

