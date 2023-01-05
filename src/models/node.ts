export enum Nodes {
	Start = "start",
	End = "end",
	Empty = "empty",
	Wall = "wall",
	Weight = "weight",
}

export namespace NodeInfo {
	export const START_COLOR = `rgb(0, 153, 255)`; // blue
	export const END_COLOR = `rgb(255, 0, 102)`; // red
	export const EMPTY_COLOR = `rgb(255, 255, 255)`; // white
	export const WALL_COLOR = `rgb(0, 0, 0)`; // black
	export const WEIGHT_COLOR = `rgb(255,215,40)`; // yellow
}
