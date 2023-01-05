import { CanvasInfo } from "../models/canvasInfo";

class CanvasState {
	squaresUsed: Array<Array<string>> = [];
	startNodePosition: Array<number> = [];
	endNodePosition: Array<number> = [];
	renderState: number = 0;

	resetValues(): void {
		this.squaresUsed = new Array(CanvasInfo.WIDTH / CanvasInfo.SQUARE_WIDTH)
			.fill(null)
			.map(() =>
				new Array(CanvasInfo.HEIGHT / CanvasInfo.SQUARE_HEIGHT).fill(null)
			);

		this.startNodePosition = [-1, -1];
		this.endNodePosition = [-1, -1];

		this.renderState = 0;
	}
}

const canvasState = new CanvasState();

export { canvasState };
