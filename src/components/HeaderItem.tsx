import Link from "next/link";

type Props = {
	text: string;
	href: string;
};

export default function HeaderItem({ text, href }: Props) {
	return (
		<Link href={href} className="p-1 text-lg font-bold">
			{text}
		</Link>
	);
}
