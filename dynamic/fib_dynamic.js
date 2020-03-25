// function fib(n) {
//     if (n <= 2) {
//         return 1;
//     }
//
//     return fib(n-1) + fib(n-2);
// }
//
// // performance: O(2N), 1.6 to the N
// console.log(fib(9));

// // fib memoized
// function fib(n, memo=[]) {
//     if (memo[n] !== undefined) {
//         return memo[n]
//     }
//
//     if (n <= 2) {
//         return 1;
//     }
//
//     var result = fib(n - 1, memo) + fib(n - 2, memo);
//
//     memo[n] = result;
//
//     return result;
// }
//
// console.log(fib(9));

// preprogram the basics
// function fib(n, memo=[undefined, 1, 1]) {
//     if (memo[n]) {
//         return memo[n];
//     }
//     if (n <= 2) {
//         return 1;
//     }
//     var result = fib(n - 1) + fib(n - 2);
//     memo[n] = result;
//
//     return result
// }
//
// console.log(fib(100));

// tabulated, work from the bottom up
function fib(n) {
    if (n <= 2) return 1;

    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}
