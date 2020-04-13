// linked list is good at insertions and deletion
// piece of data - val
//reference to next node - next

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        // set the new node on the head and tail
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
            // if head exists, set the new node to
        } else {
            // this.head.next and this.tail should be the same node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");

console.log(list);
