// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        // check on left hand side, see algo
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        // check on right hand side, see algo
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
}

module.exports = Node;


// bst = left child < parent  and right child > parent
// bt = no restrictions

// assertion checks
// left and right node and the last

// algo
// left hand side
// 1. if n < root node data and no left child,
// 2. recurse assign as left child
// 3. handle the case where n < node data and no left child
//
// //right hand side
// 1. if n > root node data and no left child,
// 2. recurse assign as left child
// 3. handle the case where n > node data and no left child
