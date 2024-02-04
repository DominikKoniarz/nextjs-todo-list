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
};

export default function ClientComponentsWrapper({ todos, count }: Props) {
    const reducer = useOptimisticTodosReducer();
    const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, reducer);

    return (
        <section className="mb-5 flex h-full w-full max-w-96 flex-col gap-4 py-10">
            <Form addOptimisticTodo={addOptimisticTodo} />
            <FiltersButtonsWrapper />
            <HorizontalLine />
            <TodosList todos={optimisticTodos} />
            {count > 10 && <Pagination count={count} />}
        </section>
    );
}
