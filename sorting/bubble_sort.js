// https://visualgo.net/en/sorting // visual
//
// function numberCompare(num1, num2) {
//     return num2-num1; // desc
//     // return num1-num2;  // asc
// }
//
// function compareByLen(str1, str2) {
//     return str2.length-str1.length; // desc
//     return str1.length-str2.length; // asc
// }
//
// console.log([64,15,10].sort(numberCompare));
// console.log(['gwf','fsgsfdgsfd','e'].sort(compareByLen));


// swap
// ES5
// function swap(arr, idx1, idx2) {
//     var temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }
// // ES2015
// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };


// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort_not_opt(arr){
    for(var i = arr.length; i > 0; i--){
        for(var j = 0; j < i - 1; j++){
            console.log(arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// // ES2015 Version
// function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
//
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }
//
// bubbleSort([8,1,2,3,4,5,6,7]);



// Optimized BubbleSort_opt with noSwaps
function bubbleSort_opt(arr){
    console.log('----------------------------');
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
            console.log(arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                console.log('---no swaps false');
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) {console.log('---no swaps true'); break;}
    }
    return arr;
}

bubbleSort_not_opt([8,1,2,3,4,5,6,7]);
bubbleSort_opt([8,1,2,3,4,5,6,7]);
