"use client";

import useFilter from "../_hooks/useFilter";
import FilterButton from "./FilterButton";

export default function FiltersButtonsWrapper() {
    const filter = useFilter();

    return (
        <div className="flex flex-row items-center gap-4">
            <FilterButton
                text="All"
                selected={filter === "all"}
                whatToFilter="all"
            />
            <FilterButton
                text="To do"
                selected={filter === "todo"}
                whatToFilter="todo"
            />
            <FilterButton
                text="Completed"
                selected={filter === "completed"}
                whatToFilter="completed"
            />
        </div>
    );
}
