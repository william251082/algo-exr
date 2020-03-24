class PriorityQueue {
    constructor() {
        this.values = [];
    }

    // push and sort object element to values
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    // return the object with lowest priority
    dequeue() {
        return this.values.shift();
    }

    // sort priority
    sort() {
        // O(N*log(N))
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

let p = new PriorityQueue();

p.enqueue("A", 6);
p.enqueue("B", 7);
p.enqueue("C", 9);
p.enqueue("D", 2);
p.enqueue("E", 1);
p.enqueue("F", 8);
p.enqueue("G", 3);

console.dir(p.values);
console.log(p.dequeue());

