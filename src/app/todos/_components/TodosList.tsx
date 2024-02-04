import { TodoType } from "@/types/todosPage";
import Todo from "./Todo";
import useFilter from "../_hooks/useFilter";

type Props = {
    todos: TodoType[];
};

export default function TodosList({ todos }: Props) {
    const filter = useFilter();

    const filteredTodos = todos.filter((todo) => {
        if (filter === "all") return true;
        else if (filter === "completed") return todo.completed;
        else if (filter === "todo") return !todo.completed;
        else return false;
    });

    return (
        <ul className="flex flex-col gap-4">
            {filteredTodos.length > 0 ? (
                filteredTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        content={todo.content}
                        completed={todo.completed}
                        pending={todo.pending}
                    />
                ))
            ) : (
                <li className="h-fit w-full text-center">
                    <p className="w-full font-medium">
                        You don&apos;t have any todos!
                    </p>
                </li>
            )}
        </ul>
    );
}
