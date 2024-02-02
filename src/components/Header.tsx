import getAuth from "@/lib/getAuth";
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

export default async function Header() {
    const session = await getAuth();

    return (
        <ul className="h-22 flex w-full shrink-0 flex-row items-center gap-5 p-5">
            {headerItems.map((item, index) => (
                <HeaderItem
                    key={`${index}-${item.text}`}
                    href={item.href}
                    text={item.text}
                />
            ))}
            {session && <LogoutWrapper />}
        </ul>
    );
}
