"use client";

import Link from "next/link";
import useTodosPageURL from "../_hooks/useTodosPageURL";

type Props = { page: number; selectedPage: number };

function PaginationItemLink({
    page,
    isSelected,
}: {
    page: number;
    isSelected: boolean;
}) {
    const todosURL = useTodosPageURL();
    todosURL.searchParams.set("page", page.toString());

    return (
        <Link
            href={todosURL}
            className={`block px-3 py-2 hover:bg-slate-100 hover:text-black ${isSelected ? "bg-slate-100 text-black" : ""}`}
        >
            {page}
        </Link>
    );
}

function PaginationItemDots() {
    return <span className="block px-3 py-2">...</span>;
}

export default function PaginationItem({ page, selectedPage }: Props) {
    return (
        <li
            key={page}
            className="overflow-hidden rounded-md font-bold transition-colors duration-200"
        >
            {selectedPage === page ||
            selectedPage === page + 1 ||
            selectedPage === page - 1 ? (
                <PaginationItemLink
                    page={page}
                    isSelected={selectedPage === page}
                />
            ) : selectedPage === page + 2 || selectedPage === page - 2 ? (
                <PaginationItemDots />
            ) : (
                ""
            )}
        </li>
    );
}
