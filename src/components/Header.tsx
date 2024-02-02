import HeaderItem from "./HeaderItem";
import LogoutWrapper from "./LogoutWrapper";

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
        <ul className="flex h-22 w-full shrink-0 flex-row items-center gap-5 p-5">
            {headerItems.map((item, index) => (
                <HeaderItem
                    key={`${index}-${item.text}`}
                    href={item.href}
                    text={item.text}
                />
            ))}
            <LogoutWrapper />
        </ul>
    );
}
