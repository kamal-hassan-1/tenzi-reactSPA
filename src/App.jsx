import { useState } from "react";
import Die from "./components/Die";

function generateRandomNum() {
	return Math.floor(Math.random() * 6) + 1;
}

function generateDiceArray() {
	return Array.from({ length: 10 }, () => {
		return {
			value: generateRandomNum(),
			isHeld: false,
		};
	});
}

export default function App() {
	const [dice, setDice] = useState(generateDiceArray());

	function gameWonStatus() {
		return dice.every((die) => die.isHeld) && dice.every((die) => die.value === dice[0].value);
	}
	const gameWon = gameWonStatus();

	//handlers
	function handleRoll() {
		setDice((prevDice) => prevDice.map((die) => (die.isHeld ? die : { value: generateRandomNum(), isHeld: false })));
	}
	function handleHold(id) {
		setDice((prevDice) => prevDice.map((die, idx) => (idx === id ? { ...die, isHeld: !die.isHeld } : die)));
	}
	function handleNewGame() {
		setDice(generateDiceArray());
	}

	return (
		<main className="h-full w-full flex flex-col items-center justify-evenly bg-[#F5F5F5] rounded-xl max-h-100 max-w-100 sm:max-h-150 sm:max-w-150 p-4">
			<section>
				<h1 className="text-center tracking-tighter text-[2.5rem] font-bold text-[#2B283A]">Tenzies</h1>
				<p className="text-center tracking-tight font-normal text-[#4A4E74]">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
			</section>
			<section className="grid grid-cols-5 gap-6 mb-2">
				{dice.map((num, idx) => (
					<Die
						key={idx}
						obj={num}
						handleHold={() => handleHold(idx)}
					/>
				))}
			</section>
			{gameWon ? (
				<button
					className="h-12 w-28 text-[1.2rem] bg-[#5035FF] rounded-md cursor-pointer text-white p-1.5"
					onClick={handleNewGame}>
					New Game
				</button>
			) : (
				<button
					className="h-12 w-28 text-[1.2rem] bg-[#5035FF] rounded-md cursor-pointer text-white p-1.5"
					onClick={handleRoll}>
					Roll
				</button>
			)}
		</main>
	);
}
