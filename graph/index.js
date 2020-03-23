class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1] = [v2];
        this.adjacencyList[v2] = [v1];
    }
}

const g = new Graph();
g.addVertex('hi');
g.addVertex('hi1');
g.addVertex('hi2');
g.addEdge('hi', 'hi1');
console.dir(g);
