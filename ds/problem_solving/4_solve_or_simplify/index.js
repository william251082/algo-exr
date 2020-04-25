function charCount(str) {
    // make object to return at the end
    var result = {};
    // loop over string
    // for each character...
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        // if char is number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
        // if char is number/letter AND not in in object, add it to object and set value to 1
        } else {
            result[char] = 1;
        }
    }
    // return object at end
    return result;
}
 console.log(charCount('hello'));
