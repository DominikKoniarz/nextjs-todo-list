"use client";

import { TodoType } from "@/types/todosPage";
import Form from "./Form";
import HorizontalLine from "./HorizontalLine";
import SortingButtonsWrapper from "./SortingButtonsWrapper";
import TodosList from "./TodosList";
import { useOptimistic } from "react";

type Props = {
    todos: TodoType[];
};

const reducer = (state: TodoType[], newTodo: string) => [
    {
        id: String(state.length + 1),
        content: newTodo,
        completed: false,
        pending: true,
    },
    ...state,
];

export default function ClientComponentsWrapper({ todos }: Props) {
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
