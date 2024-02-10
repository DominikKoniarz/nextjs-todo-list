"use client";

export default function SubmitButton({ pending }: { pending: boolean }) {
    return (
        <button
            className="transition-color mx-auto mt-1 w-fit rounded-lg bg-white px-4 py-2 text-base font-bold capitalize text-black duration-100 aria-disabled:opacity-60"
            aria-disabled={pending}
        >
            {pending ? "Loading..." : "Login"}
        </button>
    );
}
