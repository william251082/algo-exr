// function bubbleSort_not_opt(arr){
//     for(var i = arr.length; i > 0; i--){
//         for(var j = 0; j < i - 1; j++){
//             console.log(arr[j], arr[j+1]);
//             if(arr[j] > arr[j+1]){
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
//
// var data = Array.apply(null, {length: 100000}).map(Function.call, Math.random);
// console.log(bubbleSort_not_opt(data));


// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function merge_sort(full_arr) {
    let arr1 = [];
    let arr2 = [];
    const midpoint = Math.floor((2 * full_arr.length - 1)/2);
    if (full_arr.length <= 1) { return full_arr; }
    // break the array into halves until you have arrays that are empty or have one element
    for (let i=0; full_arr.length; i++) {
        if (i < midpoint) {
            arr1.push(full_arr[i]);

        } else {
            arr2.push(full_arr[i]);
        }
    }
    merge_sort(arr1);
    merge_sort(arr2);

    return merge(arr1, arr2);
    // console.log(arr1, arr2);
}

// Recursive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    console.log(`-----slice the the left array until there\'s 1 left-----`);
    // slice the the left array until there's 1 left
    let left = mergeSort(arr.slice(0,mid));
    console.log('-----------------');
    console.log('right', arr.slice(mid));
    console.log(`-----slice the the right array until there\'s 1 left-----`);
    // slice the the right array until there's 1 left
    let right = mergeSort(arr.slice(mid));

    console.log('-----merge left and right whenever they have one element left -----');
    console.log('right', right, 'left', left);
    return merge(left, right);
}

mergeSort([10,24,76,73]);

// -----slice the the left array until there's 1 left-----
// -----slice the the left array until there's 1 left-----
// -----------------
//     right [ 24 ]
// -----slice the the right array until there's 1 left-----
// -----merge left and right whenever they have one element left -----
//     right [ 24 ] left [ 10 ]
// -----------------
//     right [ 76, 73 ]
// -----slice the the right array until there's 1 left-----
// -----slice the the left array until there's 1 left-----
// -----------------
//     right [ 73 ]
// -----slice the the right array until there's 1 left-----
// -----merge left and right whenever they have one element left -----
//     right [ 73 ] left [ 76 ]
// -----merge left and right whenever they have one element left -----
//     right [ 73, 76 ] left [ 10, 24 ]


// console.log([1,10,50], [2,14,99,100]);
// console.log(mergeSort([1,10,50,2,14,99,100]));
// console.log(merge_sort([1,10,50,2,14,99,100]));


