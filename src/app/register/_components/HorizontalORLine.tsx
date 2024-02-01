export default function HorizontalORLine() {
	return (
		<div
			className="relative flex flex-col justify-center w-56 h-8 my-1"
			aria-hidden={true}
		>
			<hr className="bg-white h-0.5 w-full rounded-sm" />
			<div className="border absolute w-fit h-fit block px-2 py-0.5 text-base rounded-md bg-slate-800 uppercase left-1/2 -translate-x-1/2">
				or
			</div>
		</div>
	);
}
