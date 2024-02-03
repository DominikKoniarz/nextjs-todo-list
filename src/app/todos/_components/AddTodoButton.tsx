"use client";

import { useFormStatus } from "react-dom";

export default function AddTodoButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="block h-full rounded-lg bg-white px-6 py-3 capitalize text-black opacity-100 aria-disabled:cursor-not-allowed aria-disabled:opacity-60"
            aria-disabled={pending}
        >
            Add
        </button>
    );
}
