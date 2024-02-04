import addTodo from "@/actions/addTodo";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

const useAddNewTodo = () => {
    const addNewTodo = async (
        newTodo: string,
        setNewTodo: Dispatch<SetStateAction<string>>,
    ) => {
        const result = await addTodo(newTodo);

        if (result) {
            toast.error(result.error);
            return;
        }

        setNewTodo("");
    };

    return addNewTodo;
};

export default useAddNewTodo;
