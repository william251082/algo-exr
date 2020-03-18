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
        this.insertAt(data, 0)
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
        return this.getAt(0);
    }

    getLast () {
        // if(!this.head) {
        //     return null;
        // }
        //
        // let node = this.head;
        //
        // while (node) {
        //
        //     if (!node.next) {
        //         return node;
        //     }
        //
        //     node = node.next
        // }
        return this.getAt(this.size() - 1);
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

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next
        }
    }
}

// test
const nodeOne = new Node('a');
const list = new LinkedList();

list.head = nodeOne;

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.insertLast(6);


console.log(list.forEach((node, index) => {
    node.data += 10
}));
console.log(list.getAt(0));


module.exports = { Node, LinkedList };

// function *numbers() {
//     const result = 1 + 1;
//     return 20 + (yield result)
// }
//
// // when you define a generator -- it will return {}
// // and you call .next(), the code inside will execute until yield is found
// // that value will be on generator.next
// const generator = numbers();
// generator.next(); // {"value":2,"done":false}
// generator.next(); // {"value":null,"done":true}
// generator.next(10); // {"value":30,"done":true}


// function *list() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }
//
// const generator = list();
// generator.next(); // {"value":1,"done":false}
// generator.next(); // {"value":2,"done":false}
// generator.next(); // {"value":3,"done":false}
// generator.next(); // {"value":4,"done":false}
// generator.next(); // {"value":5,"done":false}
// generator.next(); // {"done":true}
// generator.next(); // {"done":true}
//
// const numbers = [];
// for (let value of generator) {
//     numbers.push(value);
// }

// function *numbers() {
//     yield 1;
//     yield 2;
//     yield* moreNumbers();
//     yield 6;
//     yield 7;
// }
//
// function *moreNumbers() {
//     yield 3;
//     yield 4;
//     yield 5;
// }
//
// const generator = numbers();
//
// const values = [];
// for (let value of generator) {
//     values.push(value)
// }
//
// console.log(values);


// class Tree {
//     constructor(value = null, children = []) {
//         this.value = value;
//         this.children = children;
//     }
//
//     *printValues() {
//         yield this.value;
//         for (let child of this.children) {
//             yield* child.printValues();
//         }
//     }
// }
//
// const tree = new Tree(1, [
//     new Tree(2, [new Tree(4)]),
//     new Tree(3)
// ]);
//
//
// const values = [];
// for (let value of tree.printValues()) {
//     values.push(value);
// }
//
// console.log(tree);
