import Die from "./components/Die";

function generateDiceArray() {
	return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
}

export default function App() {
	const dice = generateDiceArray();

	return (
		<main className="h-full w-full flex items-center justify-center bg-white rounded-xl max-h-100 max-w-100 sm:max-h-150 sm:max-w-150 p-4">
			<section className="grid grid-cols-5 gap-6">
				{dice.map((num, idx) => (
					<Die
						key={idx}
						num={num}
					/>
				))}
			</section>
		</main>
	);
}
