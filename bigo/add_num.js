const {performance} = require('perf_hooks');

//slow
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
//
// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// // fast
// function addUpTo(n) {
//     return n * (n + 1) / 2;
// }
//
// var time1 = performance.now();
// addUpTo(1000000000);
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);



function countUpAndDown(n) {
    console.log('Going up');
    for (let i = 0; i < n; i++) {
        console.log(i)
    }// O(n)
    console.log('At the top \n Going down');
    for (let j = n-1; j >= 0; j--) {
        console.log(j)
    }// O(n)
    console.log('Back down');
}

// countUpAndDown(10);


function printAllPairs(n) {
    for (var i=0; i<n; i++) { // O(n)
        for (var j=0; j<n; j++) {  // O(n)
            console.log(i, j);
        }
    }
}

// O(n) inside O(n) is O(n*n) or O(n^2)

// printAllPairs(10);


// constants don't matter
// O(2n) -->  O(n)
// O(500) -->  O(1)
// O(13n^2) -->  O(n^2)

// smaller terms don't matter
// O(n+10) --> O(n)
// O(1000n+50) --> O(n)
// O(n^2+5n+8n) --> O(n^2)

function logAtLeast(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
} // the constant 5 doesn't matter -- O(5n) --> O(n)


function logAtMost(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
} // doesn't matter if the n grows --> O(1)
logAtLeast(10);
logAtMost(10);

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

