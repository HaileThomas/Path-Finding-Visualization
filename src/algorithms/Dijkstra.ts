import type { IDictionary } from "types/graph";
import type { GraphObj } from "types/graph";

type NodeCoord = string | null;

class Dijkstra {
	shortestDistanceNode(
		distances: IDictionary<number>,
		visited: Array<string>
	): NodeCoord {
		let shortest = null;

		for (let node in distances) {
			let currentIsShortest =
				shortest === null || distances[node] < distances[shortest];
			if (currentIsShortest && !visited.includes(node)) {
				shortest = node;
			}
		}
		return shortest;
	}

	findShortestPath(graph: GraphObj, startNode: string, endNode: string) {
		let distances: IDictionary<number> = {};
		distances[endNode] = Infinity;
		distances = Object.assign(distances, graph[startNode]);

		let parents: IDictionary<string | null> = { endNode: null };
		for (let child in graph[startNode]) {
			parents[child] = startNode;
		}

		let visited: string[] = [];

		let node = this.shortestDistanceNode(distances, visited);

		while (node) {
			let distance = distances[node];
			let children = graph[node];

			for (let child in children) {
				if (String(child) === String(startNode)) {
					continue;
				} else {
					let newdistance = distance + children[child];
					if (!distances[child] || distances[child] > newdistance) {
						distances[child] = newdistance;
						parents[child] = node;
					}
				}
			}

			visited.push(node);

			node = this.shortestDistanceNode(distances, visited);
		}

		let shortestPath = [endNode];
		let parent = parents[endNode];
		while (parent) {
			shortestPath.push(parent);
			parent = parents[parent];
		}
		shortestPath.reverse();

		let results = {
			distance: distances[endNode],
			path: shortestPath,
		};
		return results;
	}
}

const dijkstra = new Dijkstra();
export { dijkstra };
