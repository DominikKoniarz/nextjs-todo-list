import { FaXmark } from "react-icons/fa6";
import useDeleteTodoAction from "../_hooks/useDeleteTodoAction";

type Props = {
    id: string;
    pending: boolean | undefined;
};

export default function DeleteButton({ id, pending }: Props) {
    const deleteTodoAction = useDeleteTodoAction();

    return (
        <button
            type="button"
            className="rounded-full p-1 text-2xl text-red-500 transition-colors duration-150 hover:bg-gray-100 aria-disabled:bg-transparent"
            aria-disabled={pending}
            onClick={() => !pending && deleteTodoAction(id)}
        >
            <FaXmark />
        </button>
    );
}
