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

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        return this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let prev = this.head;
        let node = this.head.next;

        while (node.next) {
            prev = node;
            node = node.next;
        }

        prev.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // there are some nodes in our chain
            last.next = new Node(data);
        } else {
            // chain is empty
            return this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const prev = this.getAt(index - 1);

        // handle index that's out of bounds
        // handle if prev.next.next is null
        if (!prev || prev.next) {
            return;
        }

        // connect to the current next's next
        prev.next = prev.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const prev = this.getAt(index - 1) || this.getLast();
        prev.next = new Node(data, prev.next);
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

console.log(list.insertAt('insertAt', 5));
console.log(list.getAt(5));

//edge cases:
// inserting on empty node
// index is out of bounds


module.exports = { Node, LinkedList };
