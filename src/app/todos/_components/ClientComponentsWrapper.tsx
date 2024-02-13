"use client";

import { useOptimistic } from "react";
import { TodoType } from "@/types/todosPage";
import Form from "./Form";
import HorizontalLine from "./HorizontalLine";
import FiltersButtonsWrapper from "./FiltersButtonsWrapper";
import TodosList from "./TodosList";
import useOptimisticTodosReducer from "../_hooks/useOptimisticTodosReducer";
import Pagination from "./Pagination";

type Props = {
    todos: TodoType[];
    count: number;
    selectedPage: number;
};

export default function ClientComponentsWrapper({
    todos,
    count,
    selectedPage,
}: Props) {
    const reducer = useOptimisticTodosReducer();
    const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, reducer);
    const availablePages = Math.ceil(count / 10);

    return (
        <section className="flex h-full w-full max-w-full flex-col gap-3 px-3.5 py-6 xs:max-w-80 xs:px-0 sm:max-w-96 sm:gap-4 sm:py-10 md:py-12">
            <Form addOptimisticTodo={addOptimisticTodo} />
            <FiltersButtonsWrapper />
            <HorizontalLine />
            <TodosList todos={optimisticTodos} />
            {count > 10 && selectedPage <= availablePages && (
                <Pagination count={count} selectedPage={selectedPage} />
            )}
        </section>
    );
}
