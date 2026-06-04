export default function Die(props) {
	return (
		<button
			className="h-10 w-10 sm:w-16 sm:h-16 rounded-lg bg-white text-[#2B283A] font-bold text-2xl sm:text-4xl cursor-pointer"
			style={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}>
			{props.num}
		</button>
	);
}
