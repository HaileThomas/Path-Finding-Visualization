import { Element, ElementColor } from "../models/element.js";
import { CanvasInfo } from "../models/canvasInfo.js";
import { canvasState } from "./CanvasState.js";

class Canvas {
	private padding = 0.5;

	drawBoard(): void {
		for (var x = 0; x < CanvasInfo.WIDTH; x += CanvasInfo.SQUARE_WIDTH) {
			for (var y = 0; y < CanvasInfo.HEIGHT; y += CanvasInfo.SQUARE_HEIGHT) {
				if (CanvasInfo.CONTEXT == null) return;

				CanvasInfo.CONTEXT.strokeRect(
					x + this.padding,
					y + this.padding,
					CanvasInfo.SQUARE_WIDTH,
					CanvasInfo.SQUARE_HEIGHT
				);
			}
		}
		canvasState.resetValues();
	}

	clearBoard(): void {
		if (CanvasInfo.CONTEXT == null) return;

		CanvasInfo.CONTEXT.clearRect(
			0,
			0,
			CanvasInfo.WIDTH + 1,
			CanvasInfo.HEIGHT + 1
		);
		this.drawBoard();

		Element.START.disabled = false;
		Element.END.disabled = false;

		Element.START.style.backgroundColor = ElementColor.BUTTON_DEFAULT_COLOR;
		Element.END.style.backgroundColor = ElementColor.BUTTON_DEFAULT_COLOR;
	}
}

const canvas = new Canvas();

export { canvas };
