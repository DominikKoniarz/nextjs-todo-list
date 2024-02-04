import { TodoType } from "@/types/todosPage";

const useOptimisticTodosReducer = () => {
    return (state: TodoType[], newTodo: string) => [
        {
            id: String(state.length + 1),
            content: newTodo,
            completed: false,
            pending: true,
        },
        ...state,
    ];
};

export default useOptimisticTodosReducer;
