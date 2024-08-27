# Path Finding Visualizer

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## Description

Path Finding Visualizer displays the shortest path in a maze.

The paths are computed through the following algorithms:

- [Dijkstra's Algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm):

### Created with:

- Language: [TypeScript](https://www.typescriptlang.org/)
- Front-end Framework: [Bootstrap](https://getbootstrap.com/)

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

---

## Installation

To run this program simply clone the repo from GitHub using the following command,

```
git clone https://github.com/HaileThomas/Path-Finding-Visualization.git
```

You can then compile the typescrit.p This can be done with the command `npm run start`. Finally, to deply the application, use the command `npm run build`. This builds your project into a static `build/` directory that you can deploy anywhere.

> NOTE: If you make any code changes, be sure to run `npm run build` again.

---

## Usage

Afterwards, running the app is simple! All of which is ran on a 40 x 20 HTML5 Canvas.

The user can add a `start` and `end` by clicking on whichever tile they choose. The user is also able to add impenetrable `walls` and breakable `weights` by dragging across the canvas. Once ready, click `Find Path` to visualize the shortest path with the algorithm of their choice.

## Methodology

With the initial iteration of the project, each tile was a svg element with a unique id. However, with the creation of more tiles, this became difficult to load.

This eventually led to the idea of using an HTML Canvas. To create the appearance of a grid, lines are drawn at specified intervals (`drawBoard` method). When the board is cleared, the Canvas is erased and the grid is redrawn (`clearBoard` method).

```typescript
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
```

Since there isn't any underlying code differentiating the various squares, the square must be drawn on a specific part of the canvas. The `getFormattedPos` function (shown below). The function translates the mouse event coordinates to formatted x and y coordinates and returns an array containing the position of the tile [0 - 39][0 - 19].

```typescript
export default function getFormattedPos(event: MouseEvent) {
	let rect = Element.CANVAS.getBoundingClientRect();

	let xPos = event.clientX - rect.left - Element.CANVAS.clientLeft;
	let yPos = event.clientY - rect.top - Element.CANVAS.clientTop;

	return [
		Math.floor(xPos / CanvasInfo.SQUARE_WIDTH),
		Math.floor(yPos / CanvasInfo.SQUARE_HEIGHT),
	]; // finds tile coordinates
}
```

---

## Future Additions

Here are some feature I would have liked to add.

- Move start and end after render to update the path
- More algorithms
- Persistant state to save "favorite" mazes

---

## Questions?

If you have any questions about the project you can reach out to me via email or GitHub with the information below.

> Email: tghaile@stanford.edu

> GitHub: [HaileThomas](https://github.com/HaileThomas)
