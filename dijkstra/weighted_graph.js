class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
}

let g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");


g.addEdge("A", "B", 6);
g.addEdge("A", "C", 7);
g.addEdge("B","D", 9);
g.addEdge("C","E", 2);
g.addEdge("D","E", 1);
g.addEdge("D","F", 8);
g.addEdge("E","F", 3);

console.dir(g.adjacencyList);

// {
//     "A": [{node: "B", weight: 10}]
// }
