function collectOddValues(arr) {
    let new_arr = [];

    if(arr.length === 0) {
        return new_arr;
    }

    if (arr[0] % 2 !== 0) {
        new_arr.push((arr[0]))
    }

    new_arr = new_arr.concat(collectOddValues(arr.slice(1)));
    return new_arr;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

// stack pushing
collectOddValues([1,2,3,4,5]);
[1].concat(collectOddValues([2,3,4,5]));
    [].concat(collectOddValues([3,4,5]));
        [3].concat(collectOddValues([4,5]));
            [].concat(collectOddValues([5]));
                [5]
// stack pop

// use sliec, concat and spread
