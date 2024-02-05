"use client";

import { signOut } from "next-auth/react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut()}
            type="button"
            className="flex h-fit w-fit flex-row items-center gap-2 rounded-xl border border-white px-4 py-3 capitalize transition-colors duration-200 hover:border-red-600 hover:bg-red-600 sm:py-1.5"
        >
            <FaArrowRightFromBracket />
            <span className="hidden h-fit w-fit sm:block">Logout</span>
        </button>
    );
}
