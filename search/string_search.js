// function string_search(long_str, short_str) {
//     let match_count = 0;
//     for (let char_long of long_str) {
//         for (let char_short of short_str) {
//             if (char_long !== char_short) {
//                 break;
//             } else {
//                 match_count++;
//             }
//         }
//     }
//     return match_count;
// }
// console.log(string_search('xybkrdctfhjbk', 'bk'));


function naive_short(long_str, short_str) {
    let match_count = 0;
    for (var i = 0; i < long_str.length; i++) {
        for (var j = 0; j < short_str.length; j++) {
            if (short_str[j] !== long_str[i+j] ) {
                break;
            }
            if (j === short_str.length - 1) {
                match_count++;
            }
        }
    }
    return match_count;
}
// console.log(string_search('xybkrdctfhjbk', 'bk'));
console.log(naive_short('xybkrdctfhjbk', 'bk'));

