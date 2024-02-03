import addTodo from "@/actions/addTodo";
import { RefObject } from "react";
import toast from "react-hot-toast";

const useAddNewTodo = () => {
    const addNewTodo = async (
        formData: FormData,
        formRef: RefObject<HTMLFormElement>,
    ) => {
        const result = await addTodo(formData);

        if (result) {
            toast.error(result.error);
            return;
        }

        formRef.current?.reset();
    };

    return addNewTodo;
};

export default useAddNewTodo;
