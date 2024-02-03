"use client";

import AddTodoButton from "./AddTodoButton";
import FormInput from "./FormInput";
import { useRef } from "react";
import useAddNewTodo from "../_hooks/useAddNewTodo";

export default function Form() {
    const addNewTodo = useAddNewTodo();
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form
            action={(formData) => addNewTodo(formData, formRef)}
            ref={formRef}
            className="flex h-fit flex-row items-center gap-4 text-lg font-bold"
        >
            <FormInput />
            <AddTodoButton />
        </form>
    );
}
