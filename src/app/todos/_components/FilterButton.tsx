"use client";

import Link from "next/link";
import useTodosPageURL from "../_hooks/useTodosPageURL";

type Props = { text: string; selected: boolean; whatToFilter: string };

const FilterButton = ({ text, selected, whatToFilter }: Props) => {
    const todosURL = useTodosPageURL();
    todosURL.searchParams.set("filter", whatToFilter);
    todosURL.searchParams.delete("page");

    const selectedClasses = selected
        ? "bg-slate-800 border-white text-white"
        : "bg-white text-black border-transparent";

    return (
        <button
            type="button"
            className={`w-1/3 rounded-md border-2 text-sm font-bold transition-all duration-200 ${selectedClasses}`}
        >
            <Link
                href={todosURL}
                className="block h-fit w-full px-1 py-2 text-center sm:px-5"
            >
                {text}
            </Link>
        </button>
    );
};

export default FilterButton;
