import GraphBuilder from "./GraphBuilder.js";
import pathFinder from "./PathFinder.js";
import type { GraphObj } from "types/graph.js";

class Graph {
	graph: GraphObj = {};

	addNode(cell: string) {
		this.graph[cell] = {};
	}

	addEdge(start: string, end: string, weight: number) {
		this.graph[start][end] = weight;
	}

	solve(algorithm: string) {
		this.graph = GraphBuilder.build();
		return pathFinder.findShortestPath(algorithm);
	}
}

const g = new Graph();
export { g };
