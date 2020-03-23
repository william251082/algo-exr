// DFGTS

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
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        // // undirected graph
        // this.adjacencyList[v1].push(v2);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );

        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }

    removeVertex(vertex) {
        // prune edges with value vertex that has to be removed
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        // delete vertex
        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) {
                return null;
            }
            // mark vertex as visited
            visited[vertex] = true;
            // add vertex to results list
            result.push(vertex);
            console.log(adjacencyList[vertex]);
            // foreach neighbor in vertex's neighbors
            // recursively call dfs on neighbor
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        console.log('stack1', stack);
        while(stack.length) {
            console.log('after while stack', stack);
            currentVertex = stack.pop();
            console.log('currentVertex', currentVertex);
            result.push(currentVertex);
            console.log('result', result);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                console.log('neighbor', neighbor);
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result;
    }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");
// console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
