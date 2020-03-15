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

    getLast () {
        if(!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {

            if (!node.next) {
                return node;
            }

            node = node.next
        }
    }
}

//test
const nodeOne = new Node('a');
const list = new LinkedList();

list.head = nodeOne;

list.insertFirst('hi');
list.insertFirst('b');
list.insertFirst('c');
list.insertFirst('d');
list.insertFirst('e');
list.insertFirst('f');

console.log(list.getLast()); // should be a, return the entire Node

module.exports = { Node, LinkedList };
