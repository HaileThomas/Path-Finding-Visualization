import { CanvasInfo } from "../models/canvasInfo";
import { colorSquare } from "../utils/colorSquare.js";
import toggleCanvasState from "../utils/toggleCanvasState";

export default function displaySolution(solution: {
	distance: number;
	path: string[];
}) {
	let path = solution.path.slice(1, -1);
	let distance = solution.distance;

	if (distance == 1) {
		return alert("Nodes Adjacent - Already Solved");
	}

	toggleCanvasState("rendering");

	drawPath(path);
}

function drawPath(path: string[]) {
	let index = 0;

	function delayedOutput() {
		let currentPathCoord: number[] = path[index].split(" ").map(Number);

		colorPathSquare(
			currentPathCoord[0],
			currentPathCoord[1],
			index,
			path.length
		);
		index++;

		if (index < path.length) {
			setTimeout(delayedOutput, 250);
		}

		if (index == path.length) {
			toggleCanvasState("rendered");
		}
	}

	delayedOutput();
}

function colorPathSquare(
	x: number,
	y: number,
	index: number,
	distance: number
) {
	if (CanvasInfo.CONTEXT == null) return;

	// find current gradient color value based on distance
	var rDiff = ((255 - 0) / distance) * (index + 1);
	var gDiff = ((0 - 153) / distance) * (index + 1);
	var bDiff = ((102 - 255) / distance) * (index + 1);

	CanvasInfo.CONTEXT.fillStyle = `rgb(
        ${Math.floor(rDiff + 0)},
        ${Math.floor(gDiff + 153)},
        ${Math.floor(bDiff + 255)}
      )`;

	colorSquare(x, y);
}
