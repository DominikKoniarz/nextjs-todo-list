"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";

export default function GoogleSignUp() {
    return (
        <button
            onClick={() => signIn("google")}
            type="button"
            className="active:scale-97.5 flex w-fit flex-row items-center gap-4 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-800"
        >
            <FaGoogle className="text-base" />
            Sign Up with Google
        </button>
    );
}
