import changeTodoCompleted from "@/actions/changeTodoCompleted";
import toast from "react-hot-toast";

const useChangeTodoCompletedAction = () => {
    const changeTodoCompletedAction = async (id: string) => {
        try {
            const response = await changeTodoCompleted(id);

            if (response) {
                toast.error(response.error);
            }
        } catch (error) {
            toast.error("Unknown error occured!");
        }
    };

    return changeTodoCompletedAction;
};

export default useChangeTodoCompletedAction;
