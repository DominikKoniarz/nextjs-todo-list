"use client";

import Link from "next/link";
import useTodosPageURL from "../_hooks/useTodosPageURL";

type Props = { text: string; selected: boolean; whatToFilter: string };

const FilterButton = ({ text, selected, whatToFilter }: Props) => {
    const todosURL = useTodosPageURL();
    const filterUrl = new URL(todosURL);
    filterUrl.searchParams.append("filter", whatToFilter);

    const selectedClasses = selected
        ? "bg-slate-800 border-white text-white"
        : "bg-white text-black border-transparent";

    return (
        <button
            type="button"
            className={`w-1/3 rounded-md border-2 text-sm font-bold transition-all duration-200 ${selectedClasses}`}
        >
            <Link
                href={filterUrl}
                prefetch={false}
                className="block h-fit w-full px-5 py-2"
            >
                {text}
            </Link>
        </button>
    );
};

export default FilterButton;
