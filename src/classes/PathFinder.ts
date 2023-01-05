import { dijkstra } from "../algorithms/Dijkstra.js";
import { g } from "./Graph.js";

export enum Algorithms {
	Dijkstra = "Dijkstra",
}

class PathFinder {
	findShortestPath(type: string) {
		switch (type) {
			case Algorithms.Dijkstra:
				return dijkstra.findShortestPath(g.graph, "start", "finish");
		}
	}
}

const pathFinder = new PathFinder();
export default pathFinder;
