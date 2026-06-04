import { useState } from "react";
import Die from "./components/Die";

function generateDiceArray() {
	return Array.from({ length: 10 }, () => {
		return {
			value: Math.floor(Math.random() * 6) + 1,
			isHeld: false,
		};
	});
}

export default function App() {
	console.log("rendered");

	const [dice, setDice] = useState(generateDiceArray());

	function handleRoll() {
		setDice(generateDiceArray());
	}

	return (
		<main className="h-full w-full flex flex-col items-center justify-evenly bg-white rounded-xl max-h-100 max-w-100 sm:max-h-150 sm:max-w-150 p-4">
			<section className="grid grid-cols-5 gap-6">
				{dice.map((num, idx) => (
					<Die
						key={idx}
						obj={num}
					/>
				))}
			</section>
			<button
				className="h-12 w-24 text-[1.2rem] bg-[#5035FF] rounded-md cursor-pointer text-white p-1.5"
				onClick={handleRoll}>
				Roll
			</button>
		</main>
	);
}
