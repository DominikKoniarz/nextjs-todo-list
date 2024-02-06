"use client";

import addTodo from "@/actions/addTodo";
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

const useAddNewTodo = () => {
    const [pending, setPending] = useState<boolean>(false);

    const addNewTodo = async (
        newTodo: string,
        setNewTodo: Dispatch<SetStateAction<string>>,
    ) => {
        setPending(true);
        const result = await addTodo(newTodo);

        if (result) {
            toast.error(result.error);
            return;
        }

        setPending(false);
        setNewTodo("");
    };

    return { addNewTodo, pending };
};

export default useAddNewTodo;
