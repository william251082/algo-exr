// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    traverseBF(fn) {

    }
}

const node = new Node(1);
const tree = new Tree();
tree.root = node;


// algo
// 1. create an empty array and take the root node from tree and put it inside
// 2. while there's still an element in the array, take it out the first element
// 3. look at the recently removed element's chlidrean and put all of them in the array
// 4. throw away the recently removed element after the process
// 5. repeat step 2

module.exports = { Tree, Node };
