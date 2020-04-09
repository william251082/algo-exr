// https://visualgo.net/en/sorting

// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}

function s_sort(arr) {
    for (let i=0; i<arr.length; i++) {
        let lowest = i;
        for (let j=i+1; j<arr.length; j++) {
            // console.log(arr[i], arr[j], arr[lowest]);
            // if next el is less than current lowest
            if (arr[j] < arr[lowest]) {
                // update next el
                lowest = j;
            }
        }
        // swap
        console.log('pointer', arr[i]);
        console.log('-----------');
        console.log(arr);
        console.log('swapping to: ');
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        console.log(arr);
        console.log('----------');
    }
    return arr;
} // O(n^2)


s_sort([0,2,34,22,10,19,17]);
