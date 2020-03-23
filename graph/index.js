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
        // directed graph
        this.adjacencyList[v1] = [v2];
        this.adjacencyList[v2] = [v1];
        // // undirected graph
        // this.adjacencyList[v1] = [v2];
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );

        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
}

const g = new Graph();
g.addVertex('hi');
g.addVertex('hi1');
g.addVertex('hi2');
g.addEdge('hi', 'hi1');
g.addEdge('hi', 'hi2');
g.removeEdge('hi', 'hi2');
console.dir(g);
