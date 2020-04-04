// list of data structures
// https://en.wikipedia.org/wiki/List_of_data_structures
// RAM and persistent memory
// https://www.youtube.com/watch?v=fpnE6UAfbtU
// computer memory
// http://statmath.wu.ac.at/courses/data-analysis/itdtHTML/node55.html


// traversal --access each only once
// access
// insertion
// deletion
// searching
// sorting


const strings= ['a', 'b', 'c', 'd'];
// 'a' 4 * 4 = 16bytes of memory

const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e'); // O(1)  // sometimes O(n)

//pop
strings.pop(); // O(1)
strings.pop();

//unshift
strings.unshift('x'); // add at a the beginning  // O(n)
strings.shift('x'); // removes the first el // O(n)

//splice
strings.splice(2, 0, 'alien'); // delete el O(n)

console.log(strings);


// C++ --static array
// int a[20];
// int b[5] {1,2,3,4,5}

// js --static array
// on adding element, it will make a new array to add the el


