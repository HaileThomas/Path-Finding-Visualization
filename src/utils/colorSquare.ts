import { CanvasInfo } from "../models/canvasInfo.js";

export function withinCanvas(xPos: number, yPos: number) {
	let validX = xPos < CanvasInfo.WIDTH / CanvasInfo.SQUARE_WIDTH && xPos > -1;
	let validY = yPos < CanvasInfo.HEIGHT / CanvasInfo.SQUARE_HEIGHT && yPos > -1;

	return validX && validY;
}

export function colorSquare(xPos: number, yPos: number) {
	if (CanvasInfo.CONTEXT == null) return;

	CanvasInfo.CONTEXT.fillRect(
		xPos * CanvasInfo.SQUARE_WIDTH + 1,
		yPos * CanvasInfo.SQUARE_HEIGHT + 1,
		CanvasInfo.SQUARE_WIDTH - 1,
		CanvasInfo.SQUARE_HEIGHT - 1
	);
}
