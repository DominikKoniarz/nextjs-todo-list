import HeaderItem from "./HeaderItem";

type HeaderItem = {
	text: string;
	href: string;
};

const headerItems: HeaderItem[] = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "Your Todos",
		href: "/todos",
	},
];

export default function Header() {
	return (
		<ul className="w-full p-5 shrink-0 flex flex-row gap-5">
			{headerItems.map((item, index) => (
				<HeaderItem
					key={`${index}-${item.text}`}
					href={item.href}
					text={item.text}
				/>
			))}
		</ul>
	);
}
