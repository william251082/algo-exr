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

    // remove the last and assign a new tail
    // // my take
    // pop() {
    //     if (!this.head) {
    //         return undefined;
    //     }
    //     var current = this.head;
    //     var last_node = this.tail;
    //     this.tail = null;
    //     while(current) {
    //         // find the second to the last node
    //         if (current.next === last_node) {
    //             console.log(current);
    //             this.tail = current;
    //             this.tail.next = null;
    //             this.length--;
    //         }
    //         current = current.next;
    //     }
    //     return last_node;
    // }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    // // my take
    // remove el from the beginning
    // shift() {
    //     if (!this.head) return undefined;
    //     let current_head = this.head;
    //     this.head = this.head.next;
    //     current_head = null;
    //     this.length--;
    //     return current_head;
    // }

    // // add a new to the beginning of element
    // // make new
    // unshift(val) {
    //     let new_node = new Node(val);
    //     if(!this.head) return new_node;
    //     new_node.next = this.head;
    //     this.length++;
    //     return new_node;
    // }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // in order to figure out the new tail from popping
    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
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
list.push("!");
// list.shift();
// SinglyLinkedList {
//     head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: null } },
//     tail: Node { val: 'GOODBYE', next: null },
//     length: 2
// }
// list.pop();
list.unshift('first');


console.log(list);
// console.log(list.unshift('first'));


// //reverse linked list python
// # Python program to reverse a linked list
// # Time Complexity : O(n)
// # Space Complexity : O(1)
//
// # Node class
// class Node:
//
// # Constructor to initialize the node object
// def __init__(self, data):
// self.data = data
// self.next = None
//
// class LinkedList:
//
// # Function to initialize head
// def __init__(self):
// self.head = None
//
// # Function to reverse the linked list
// def reverse(self):
// prev = None
// current = self.head
// while(current is not None):
// next = current.next
// current.next = prev
// prev = current
// current = next
// self.head = prev
//
// # Function to insert a new node at the beginning
// def push(self, new_data):
// new_node = Node(new_data)
// new_node.next = self.head
// self.head = new_node
//
// # Utility function to print the linked LinkedList
// def printList(self):
// temp = self.head
// while(temp):
// print temp.data,
//     temp = temp.next
//
//
// # Driver program to test above functions
// llist = LinkedList()
// llist.push(20)
// llist.push(4)
// llist.push(15)
// llist.push(85)
//
// print "Given Linked List"
// llist.printList()
// llist.reverse()
// print "\nReversed Linked List"
// llist.printList()
//
// # This code is contributed by Nikhil Kumar Singh(nickzuck_007)
// Recursive Method:
//
//     filter_none
// edit
// play_arrow
//
// brightness_4
// void recursiveReverse(struct Node** head_ref)
// {
//     struct Node* first;
//     struct Node* rest;
//
//     /* empty list */
//     if (*head_ref == NULL)
//     return;
//
//     /* suppose first = {1, 2, 3}, rest = {2, 3} */
//     first = *head_ref;
//     rest  = first->next;
//
//     /* List has only one node */
//     if (rest == NULL)
//         return;
//
//     /* reverse the rest list and put the first element at the end */
//     recursiveReverse(&rest);
//     first->next->next  = first;
//
//     /* tricky step -- see the diagram */
//     first->next  = NULL;
//
//     /* fix the head pointer */
// *head_ref = rest;
// }



// # Simple and tail recursive Python program to
// # reverse a linked list
//
// # Node class
// class Node:
//
// # Constructor to initialize the node object
// def __init__(self, data):
// self.data = data
// self.next = None
//
// class LinkedList:
//
// # Function to initialize head
// def __init__(self):
// self.head = None
//
//
// def reverseUtil(self, curr, prev):
//
// # If last node mark it head
// if curr.next is None :
//     self.head = curr
//
// # Update next to prev node
// curr.next = prev
// return
//
// # Save curr.next node for recursive call
// next = curr.next
//
// # And update next
// curr.next = prev
//
// self.reverseUtil(next, curr)
//
//
// # This function mainly calls reverseUtil()
// # with previous as None
// def reverse(self):
// if self.head is None:
//     return
// self.reverseUtil(self.head, None)
//
//
// # Function to insert a new node at the beginning
// def push(self, new_data):
// new_node = Node(new_data)
// new_node.next = self.head
// self.head = new_node
//
// # Utility function to print the linked LinkedList
// def printList(self):
// temp = self.head
// while(temp):
// print temp.data,
//     temp = temp.next
//
//
// # Driver program
// llist = LinkedList()
// llist.push(8)
// llist.push(7)
// llist.push(6)
// llist.push(5)
// llist.push(4)
// llist.push(3)
// llist.push(2)
// llist.push(1)
//
// print "Given linked list"
// llist.printList()
//
// llist.reverse()
//
// print "\nReverse linked list"
// llist.printList()


// algo techlead
// --tree traversal
//     -- pre order
//     -- in order
//     -- post order
//     -- BFS
//     -- DFS
// given a tree, traverse every view
// tree --a node with an array of children nodes inside

// recursion --commonly need helper functions, recursive program call straight to the helper function but passes in a set of initialization variables
// all recursive can be converted to iterative using stacks or queues --for example tree traversal, fib,--difficulty depends on how much state you're passing from the next iteration
// hash maps stacks queues
