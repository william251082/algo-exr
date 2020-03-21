// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }
}

function levelWidth(root) {
    const arr = [root, 's'];
    let counters = [0];

    while (arr.length > 1) {
        const node = arr.shift();

        // handle an alone 's' inside array
        if (node === 's') {
            counters.push(0);
            arr.push('s')
        } else  {
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters;
}

const root = new Node(0);
root.add(1);
root.children[0].add(2);
root.children[0].add(3);
root.children[0].children[0].add(4);

console.log(levelWidth(root));

// algo
// 1. initialize counter array and an empty array
// 2. insert the node element in an array and attach some random token in it
// 3. detach the current node from the token
// 4. the take that first element out of the array
// 5. take the children of this node and attach it at the end of the token = 's'
// 6. increment the counter
// 7. throw out the node after all this process
// 8. take out the token and add it to the end element of the array, that will signal the end of the level
// 9. add a 0 element on the counter array
//
//
// 10. repeat from step 4
// 11. if array only has 1 element then stop iterating

module.exports = levelWidth;
