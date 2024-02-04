"use client";

import { TodoType } from "@/types/todosPage";
import Form from "./Form";
import HorizontalLine from "./HorizontalLine";
import SortingButtonsWrapper from "./SortingButtonsWrapper";
import TodosList from "./TodosList";
import { useOptimistic } from "react";
import useOptimisticTodosReducer from "../_hooks/useOptimisticTodosReducer";

type Props = {
    todos: TodoType[];
};

export default function ClientComponentsWrapper({ todos }: Props) {
    const reducer = useOptimisticTodosReducer();
    const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, reducer);

    return (
        <section className="flex h-full w-full max-w-96 flex-col gap-4 py-10">
            <Form addOptimisticTodo={addOptimisticTodo} />
            <SortingButtonsWrapper />
            <HorizontalLine />
            <TodosList todos={optimisticTodos} />
        </section>
    );
}
