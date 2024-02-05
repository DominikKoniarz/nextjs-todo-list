"use client";

import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default function LogoutWrapper() {
    const pathname = usePathname();

    if (!pathname.includes("/todos")) return null;

    return (
        <li className="ml-auto h-fit w-fit text-lg font-bold">
            <LogoutButton />
        </li>
    );
}
