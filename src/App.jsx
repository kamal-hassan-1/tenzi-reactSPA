import Die from "./components/Die";
export default function App() {
	return (
		<main className="h-full w-full flex items-center justify-center bg-white rounded-xl max-h-100 max-w-100 sm:max-h-150 sm:max-w-150 p-4">
			<section className="grid grid-cols-5 gap-6">
				<Die num={1} />
				<Die num={1} />
				<Die num={1} />
				<Die num={1} />
				<Die num={1} />
				<Die num={1} />
				<Die num={1} />
				<Die num={1} />
				<Die num={1} />
				<Die num={1} />
			</section>
		</main>
	);
}
