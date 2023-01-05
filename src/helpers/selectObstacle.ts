import { CanvasInfo } from "../models/canvasInfo.js";
import { canvasState } from "../classes/CanvasState";
import { NodeInfo } from "../models/node.js";
import { withinCanvas, colorSquare } from "../utils/colorSquare.js";
import getFormattedPos from "../utils/getFormattedPos.js";

export default function selectObstacle(event: MouseEvent, type: string) {
	var [x, y] = [...getFormattedPos(event)];

	if (canvasState.squaresUsed[x][y] != null) {
		return;
	}

	canvasState.squaresUsed[x][y] = type;

	if (withinCanvas(x, y)) {
		if (CanvasInfo.CONTEXT == null) return;

		CanvasInfo.CONTEXT.fillStyle =
			type == "wall" ? NodeInfo.WALL_COLOR : NodeInfo.WEIGHT_COLOR;
		colorSquare(x, y);
	}
}
