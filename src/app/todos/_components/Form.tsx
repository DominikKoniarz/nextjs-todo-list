"use client";

import AddTodoButton from "./AddTodoButton";
import FormInput from "./FormInput";
import { useState } from "react";
import useAddNewTodo from "../_hooks/useAddNewTodo";

type Props = {
    addOptimisticTodo: (newTodo: string) => void;
};

export default function Form({ addOptimisticTodo }: Props) {
    const addNewTodo = useAddNewTodo();
    const [newTodo, setNewTodo] = useState<string>("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                addOptimisticTodo(newTodo);
                addNewTodo(newTodo, setNewTodo);
            }}
            className="flex h-fit flex-row items-center gap-3 text-base font-bold sm:gap-4 sm:text-lg"
        >
            <FormInput newTodo={newTodo} setNewTodo={setNewTodo} />
            <AddTodoButton />
        </form>
    );
}
