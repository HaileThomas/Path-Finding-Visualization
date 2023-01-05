export namespace Element {
	export const CANVAS = <HTMLCanvasElement>document.getElementById("canvas");
	export const START = <HTMLButtonElement>document.getElementById("startNode");
	export const END = <HTMLButtonElement>document.getElementById("endNode");
	export const OBSTACLE = <HTMLButtonElement>(
		document.getElementById("wallStateSwitch")
	);
	export const CLEAR = <HTMLButtonElement>document.getElementById("clearNode");
	export const DISPLAY = <HTMLButtonElement>document.getElementById("display");
}

export namespace ElementColor {
	export const BUTTON_DEFAULT_COLOR = `rgb(241, 242, 245)`; // light gray
	export const BUTTON_ACTIVE_COLOR = `rgba(11, 96, 255, 0.123)`; // light blue
}
