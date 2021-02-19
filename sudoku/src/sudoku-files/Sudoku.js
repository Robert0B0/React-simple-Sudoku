import React from "react";
import "./sudoku.css";

import Table from "./Table";
import solution from "./solution.png";
import { checktable, gameCheck } from "./gameEvaluator";

function Sudoku() {
	function processKeyPress(event) {
		console.log(event.key);
		let cell = document.querySelector(".selected-cell");
		if (cell !== null) {
			for (let i = 1; i <= 10; i++) {
				if (cell.classList.contains("number-" + i)) {
					cell.classList.remove("number-" + i);
				}
			}
			if (event.key in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] && event.key !== 0) {
				cell.classList.add("number-" + event.key);
				let coord = cell.id[5] + cell.id[6];
				let number = document.querySelector("#number-" + coord);
				number.textContent = `${event.key}`;
			}
		}
	}

	window.addEventListener("keydown", processKeyPress, false);

	return (
		<div className="center">
			<hr />
			<table className="sudoku-table center">
				<Table />
			</table>
			<hr />
			<div className="center">
				<h1>Check if correct: </h1>
				<button
					className="btn"
					onClick={() => checktable()}
					onMouseOver={(e) => {
						e.target.classList.toggle("btn-light");
					}}
					onMouseLeave={(e) => {
						e.target.classList.toggle("btn-light");
					}}
				>
					Check
				</button>
				<h2 id="evaluation">Check!</h2>
			</div>
			<hr />
			<img
				onMouseOver={(e) => {
					e.target.classList.toggle("blur");
				}}
				onMouseLeave={(e) => {
					e.target.classList.toggle("blur");
				}}
				className="image center blur"
				src={solution}
				alt="Solution"
			/>
		</div>
	);
}

export default Sudoku;
