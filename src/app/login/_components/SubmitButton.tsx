"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            className="transition-color mx-auto mt-1 w-fit rounded-lg bg-white px-4 py-2 text-lg font-bold capitalize text-black duration-100 aria-disabled:opacity-60"
            aria-disabled={pending}
        >
            {pending ? "Loading..." : "Login"}
        </button>
    );
}
