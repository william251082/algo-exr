// md5
// http://www.miraclesalad.com/webtools/md5.php
// hashing animation
// https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
let user = {
    age: 54,
    name: 'John',
    magic: true,
    scream: function () {
        console.log('ahhhhhhh')
    },
};

user.age // O(1)
user.spell = 'ahhhh'; // O(1)
user.scream(); // O(1)

//Map --> Gives you some order
//Set --> No duplicate keys


// hash collisions slows down reading and writing to O(n/k), k is the size of the hash table
// fast lookup might take O(n)

// Map() any data type as a key
// Maintains insertion order
const a = new Map();

// Sets()
// only stores the keys
const b = new Sets();
