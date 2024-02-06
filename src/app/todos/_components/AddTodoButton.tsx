"use client";

export default function AddTodoButton({ pending }: { pending: boolean }) {
    return (
        <button
            type="submit"
            className="block h-full rounded-lg bg-white px-6 py-2 capitalize text-black opacity-100 aria-disabled:cursor-not-allowed aria-disabled:opacity-60 sm:px-6 sm:py-3"
            aria-disabled={pending}
        >
            Add
        </button>
    );
}
