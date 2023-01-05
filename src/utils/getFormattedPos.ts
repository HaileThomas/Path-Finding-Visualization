import { Element } from "../models/element.js";
import { CanvasInfo } from "../models/canvasInfo.js";

export default function getFormattedPos(event: MouseEvent) {
	let rect = Element.CANVAS.getBoundingClientRect();

	let xPos = event.clientX - rect.left - Element.CANVAS.clientLeft;
	let yPos = event.clientY - rect.top - Element.CANVAS.clientTop;

	return [
		Math.floor(xPos / CanvasInfo.SQUARE_WIDTH),
		Math.floor(yPos / CanvasInfo.SQUARE_HEIGHT),
	]; // finds tile coordinates
}
