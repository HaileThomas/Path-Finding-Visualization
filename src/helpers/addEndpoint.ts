import { canvasState } from "../classes/CanvasState.js";
import { CanvasInfo } from "../models/canvasInfo.js";
import { NodeInfo, Nodes } from "../models/node.js";
import { withinCanvas, colorSquare } from "../utils/colorSquare";
import { Element, ElementColor } from "../models/element";
import getFormattedPos from "../utils/getFormattedPos.js";
import { buttonState } from "../index.js";

export function addStartNode(event: MouseEvent) {
	var [xPos, yPos] = [...getFormattedPos(event)];

	Element.START.disabled = true;

	if (canvasState.squaresUsed[xPos][yPos] != null) {
		Element.START.disabled = false;
		return;
	}

	if (withinCanvas(xPos, yPos)) {
		if (CanvasInfo.CONTEXT == null) return;
		Element.START.style.backgroundColor = ElementColor.BUTTON_DEFAULT_COLOR;

		canvasState.startNodePosition = [xPos, yPos];
		canvasState.squaresUsed[xPos][yPos] = Nodes.Start;

		CanvasInfo.CONTEXT.fillStyle = NodeInfo.START_COLOR;
		colorSquare(xPos, yPos);

		buttonState.startButtonActive = false;

		Element.CANVAS.onclick = () => {
			null;
		};
	}
}

export function addEndNode(event: MouseEvent) {
	Element.END.disabled = true;

	var [xPos, yPos] = [...getFormattedPos(event)];

	if (canvasState.squaresUsed[xPos][yPos] != null) {
		Element.END.disabled = false;
		return;
	}

	if (withinCanvas(xPos, yPos)) {
		if (CanvasInfo.CONTEXT == null) return;

		Element.END.style.backgroundColor = ElementColor.BUTTON_DEFAULT_COLOR;

		canvasState.endNodePosition = [xPos, yPos];
		canvasState.squaresUsed[xPos][yPos] = Nodes.End;

		CanvasInfo.CONTEXT.fillStyle = NodeInfo.END_COLOR;
		colorSquare(xPos, yPos);

		buttonState.endButtonActive = false;

		Element.CANVAS.onclick = () => {
			null;
		};
	}
}
