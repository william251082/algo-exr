class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
}

const g = new Graph();
g.addVertex('hi');
g.addVertex('hi1');
g.addVertex('hi2');
console.dir(g);
