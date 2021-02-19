import React from "react";

const Cell = (coordonates) => {
	let cell = "cell-" + coordonates.row + coordonates.column;
	let number = "number-" + coordonates.row + coordonates.column;
	return (
		<th>
			<svg width="40" height="40">
				<rect
					onMouseOver={(e) => {
						e.target.classList.toggle("highlighted");
					}}
					onMouseLeave={(e) => {
						e.target.classList.toggle("highlighted");
					}}
					onClick={(e) => {
						let prev = document.querySelector(".selected-cell");
						if (prev !== null) {
							prev.classList.remove("selected-cell");
						}
						e.target.classList.toggle("selected-cell");
					}}
					id={cell}
					width="40"
					height="40"
					className="box-cell"
				/>
				<text x="10" y="30" fill="black" id={number} className="number">
					{coordonates.value}
				</text>
			</svg>{" "}
		</th>
	);
};

export default Cell;
