"use client";

import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
import { useEffect, useState } from "react";

export default function LogoutWrapper() {
    const [isReadyToRender, setIsReadyToRender] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsReadyToRender(false);

        const timer = setTimeout(() => {
            if (pathname.includes("/todos")) setIsReadyToRender(true);
        }, 250);

        return () => clearTimeout(timer);
    }, [pathname]);

    if (!isReadyToRender) return null;

    return (
        <li className="ml-auto h-fit w-fit text-lg font-bold">
            <LogoutButton />
        </li>
    );
}
