import { Element } from "../models/element.js";

const buttons = [
	Element.START,
	Element.END,
	Element.OBSTACLE,
	Element.CLEAR,
	Element.DISPLAY,
];

export default function toggleCanvasState(state: string) {
	if (state == "rendering") {
		buttons.forEach((item) => (item.disabled = true));
		$("#canvas").css("pointer-events", "none");
	} else if (state == "rendered") {
		Element.CLEAR.disabled = false;
	} else {
		buttons.forEach((item) => (item.disabled = false));
		$("#canvas").css("pointer-events", "auto");
	}
}
