import { Nodes } from "../models/node.js";
import { CanvasInfo } from "../models/canvasInfo.js";
import { withinCanvas } from "../utils/colorSquare.js";
import { canvasState } from "./CanvasState.js";
import type { GraphObj } from "types/graph.js";
import { g } from "./Graph.js";

export default class GraphBuilder {
	data: GraphObj = g.graph;

	static build(): GraphObj {
		for (
			var xPos = 0;
			xPos < CanvasInfo.WIDTH / CanvasInfo.SQUARE_WIDTH;
			xPos++
		) {
			for (
				var yPos = 0;
				yPos < CanvasInfo.HEIGHT / CanvasInfo.SQUARE_HEIGHT;
				yPos++
			) {
				let cell = this.formatObjKey(xPos, yPos);
				g.addNode(cell); // curent square of maze

				[...this.getSurroundingSquaresCoords(xPos, yPos)].forEach((square) => {
					this.checkSquare(cell, ...square);
				});
			}
		}

		return g.graph;
	}

	static checkSquare(cell: string, xPos: number, yPos: number) {
		if (withinCanvas(xPos, yPos)) {
			g.addEdge(
				cell,
				this.formatObjKey(xPos, yPos),
				this.computeWeight(xPos, yPos)
			);
		}
	}

	static getSurroundingSquaresCoords(xPos: number, yPos: number) {
		let rightSquare: [number, number] = [xPos + 1, yPos];
		let leftSquare: [number, number] = [xPos - 1, yPos];
		let aboveSquare: [number, number] = [xPos, yPos + 1];
		let belowSquare: [number, number] = [xPos, yPos - 1];

		return [rightSquare, leftSquare, aboveSquare, belowSquare];
	}

	static formatObjKey(xPos: number, yPos: number): string {
		if (this.isStart(xPos, yPos)) {
			return "start";
		} else if (this.isEnd(xPos, yPos)) {
			return "finish";
		} else {
			return `${xPos} ${yPos}`;
		}
	}

	static computeWeight(xPos: number, yPos: number) {
		const type = canvasState.squaresUsed[xPos][yPos];
		switch (type) {
			case Nodes.Wall:
				return Infinity;
			case Nodes.Weight:
				return 4;
			default:
				return 1;
		}
	}

	static isStart(xPos: number, yPos: number): boolean {
		return (
			xPos == canvasState.startNodePosition[0] &&
			yPos == canvasState.startNodePosition[1]
		);
	}

	static isEnd(xPos: number, yPos: number): boolean {
		return (
			xPos == canvasState.endNodePosition[0] &&
			yPos == canvasState.endNodePosition[1]
		);
	}
}
