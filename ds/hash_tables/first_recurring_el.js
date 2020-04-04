//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input){
    for (let i=0; i < input.length; i++) {
        for (let j=i; j < input.length; j++) {
            if (input[i] === input[j]) {
                for (let k=j; k < input.length; k++) {
                     console.log(input[i+1], input[j+1]);
                    if (input[j] === input[k]) {
                        return input[j+1];
                    }
                }
            }
        }
    }
    return undefined;
} // O(n^2)


// using hash table
function firstRecurringCharacter2 (input) {
    let map = {};
    for (let i=0; i<input.length; i++) {
        if (map[input[i]] !== undefined) {
            // this will return the answer
            return input[i]
        } else {
            // this will put elements into the map
            map[input[i]] = i;
        }
        console.log(map);
    }
    return undefined;
} // O(n)



// console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,5,5,1,]));


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
