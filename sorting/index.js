// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// find the largest element in an array and drag it to the far right hand side
function bubbleSort(arr) {
    // implement bubble sort
    // first element
    for (let i = 0; i < arr.length; i++) {
        // second element
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // compare element
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                // place the existing element to a larger element
                arr[j+1] = arr[j];
                // place the least element after the greater one value
                arr[j] = lesser;
            }
        }
    }

    // return sorted array
    return arr;
}

// prove me wrong algo
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = 0; j < (arr.length - i - 1); j++) {
            // compare if the next element is less than indexOfMin then it'll be the new indexOMin
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        // compare every element to indexOfMin
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }

}

function mergeSort(arr) {

}

function merge(left, right) {

}

function getArray() {
    return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
    return [-124, -40, 0, 7, 21, 100, 500];
}

console.log(bubbleSort(getArray()) === getSortedArray());

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
