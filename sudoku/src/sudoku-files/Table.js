import React from "react";
import Cell from "./Cell";

const Table = () => {
	let hint = {
		"00": 5,
		"01": 3,
		"04": 7,
		10: 6,
		13: 1,
		14: 9,
		15: 5,
		21: 9,
		22: 8,
		27: 6,
		30: 8,
		34: 6,
		38: 3,
		40: 4,
		43: 8,
		45: 3,
		48: 1,
		50: 7,
		54: 2,
		58: 6,
		61: 6,
		66: 2,
		67: 8,
		73: 4,
		74: 1,
		75: 9,
		78: 5,
		84: 8,
		87: 7,
		88: 9,
	};
	let Table = [];
	let Row = [];

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			let coord = i.toString() + j.toString();
			if (coord in hint) {
				Row.push(<Cell row={i} column={j} value={hint[coord]} />);
			} else {
				Row.push(<Cell row={i} column={j} value={""} />);
			}
		}
		Table.push(<tr>{Row}</tr>);
		Row = [];
	}
	return <tbody>{Table}</tbody>;
};

export default Table;
