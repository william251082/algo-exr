function outer(input) {
    var outerScopedVariable = [];

    function helper(helperInput) {
        //modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input);

    return outerScopedVariable;
}


// result can be defined outside the recursive function
// collect odd values in the array
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        // if first element is odd
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        // call on all element of arr except the first element
        helper(helperInput.slice(1))
    }

    helper(arr);

    return result;
}


console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
