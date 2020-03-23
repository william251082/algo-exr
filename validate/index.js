// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
}

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

// // valid
const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);
//
// validate(n);

// invalid
// const n = new Node(10);
// n.insert(5);
// n.insert(15);
// n.insert(0);
// n.insert(20);
// n.left.left.right = new Node(999);

console.log(validate(n));

// algo
// 1. recurse through the entire tree structure
// 2. every call -- pass along a min and max check
// 3. root node should exist
// 4. the root child to left must be < max value of root node value
// 5. update the max value to that of node value
// 6. check the right child
// 7. update the min to be parent's value

module.exports = validate;
