import deleteTodo from "@/actions/deleteTodo";
import toast from "react-hot-toast";

const useDeleteTodoAction = () => {
    const deleteTodoAction = async (id: string) => {
        try {
            const response = await deleteTodo(id);

            if (response) {
                toast.error(response.error);
            }
        } catch (error) {
            toast.error("Unknown error occured!");
        }
    };

    return deleteTodoAction;
};

export default useDeleteTodoAction;
