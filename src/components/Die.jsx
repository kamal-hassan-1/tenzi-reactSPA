export default function Die(props) {
	return (
		<button
			className="w-16 h-16 rounded-lg bg-white text-[#2B283A] font-bold text-4xl cursor-pointer"
			style={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}>
			{props.num}
		</button>
	);
}
