// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        // get reference to own node
        let node = this.head;

        while (node) {
            counter++;
            // look at the current node
            node = node.next;
        }

        return counter
    }

    getFirst() {
        return this.head;
    }
}

//test
const nodeOne = new Node(5);
const list = new LinkedList();

list.head = nodeOne;

console.log(list.getFirst());

module.exports = { Node, LinkedList };
