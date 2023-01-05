import { Element, ElementColor } from "./models/element.js";
import { canvas } from "./classes/Canvas.js";
import { addStartNode, addEndNode } from "./helpers/addEndpoint.js";
import selectObstacle from "./helpers/selectObstacle.js";
import { g } from "./classes/Graph.js";
import displaySolution from "./helpers/displayShortestPath.js";
import toggleCanvasState from "./utils/toggleCanvasState.js";
import { Nodes } from "./models/node.js";

var isWall = true;
var mouseDown = false;

export var buttonState = {
	startButtonActive: false,
	endButtonActive: false,
};

var selectedAlgorithm: string = "";

var alreadyRendered = false;

canvas.drawBoard();

Element.CANVAS.addEventListener("mousedown", (e) => {
	mouseDown = true;
});

Element.CANVAS.addEventListener("mouseup", () => {
	mouseDown = false;
});

Element.CANVAS.addEventListener("mousemove", (e) => {
	if (mouseDown) {
		selectObstacle(e, isWall ? Nodes.Wall : Nodes.Weight);
	}
});

Element.START.onclick = () => {
	buttonState.startButtonActive = true;
	if (!buttonState.endButtonActive) {
		Element.START.style.backgroundColor = ElementColor.BUTTON_ACTIVE_COLOR;
	}

	Element.CANVAS.onclick = (e) => {
		addStartNode(e);
	};
};

Element.END.onclick = () => {
	buttonState.endButtonActive = true;
	if (!buttonState.startButtonActive) {
		Element.END.style.backgroundColor = ElementColor.BUTTON_ACTIVE_COLOR;
	}

	Element.CANVAS.onclick = (e) => {
		addEndNode(e);
	};
};

Element.OBSTACLE.onclick = () => {
	isWall = isWall ? false : true;
};

Element.CLEAR.onclick = () => {
	canvas.clearBoard();
	toggleCanvasState("default");
	alreadyRendered = false;
};

$(".dropdown-menu li button").on("click", function () {
	selectedAlgorithm = $(this).text();
	$(this).closest(".dropdown-menu").find("li button").removeClass("active");
	$(this).addClass("active");
});

Element.DISPLAY.onclick = () => {
	if (document == null || alreadyRendered) return;
	if (selectedAlgorithm == "") return alert("Choose Algorithm");

	let solution = g.solve(selectedAlgorithm);

	if (solution) {
		solution.distance != Infinity
			? displaySolution(solution)
			: alert("No Solution");
	}

	alreadyRendered = true;
};
