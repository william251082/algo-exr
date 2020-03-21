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
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
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

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
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
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    // this will determine how many spaces is fast will be ahead of slow
    while (n > 0) {
      fast = fast.next;
      n--;
    }

    while (fast.next) {
      slow = slow.next;
      fast = fast.next
    }

    return slow;
}

const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('d');
l.insertLast('e');
l.insertLast('f');
console.log(fromLast(l, 2)); // returns { data: 'b' }

// algo
// 1. problem: return n, n is 3 spaces from the last
// 2. set slow and fast both equal to the first
// 3. move fast forward 3 spaces
// 4. move slow 1 space forward then fast one space forward
// 5. if fast is not pointing on the end node, move slow and fast 1 step forward
// 6. if next node of fast is null then slow is now pointing at the nth element behind it
