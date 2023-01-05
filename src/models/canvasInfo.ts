import { Element } from "./element.js";

export namespace CanvasInfo {
	export const WIDTH = 800;
	export const HEIGHT = 400;
	export const SQUARE_WIDTH = 20;
	export const SQUARE_HEIGHT = SQUARE_WIDTH;
	export const CONTEXT = Element.CANVAS.getContext("2d");
}
