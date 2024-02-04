import { TodoType } from "@/types/todosPage";
import Todo from "./Todo";

type Props = {
    todos: TodoType[];
};

export default function TodosList({ todos }: Props) {
    return (
        <ul className="flex flex-col gap-4">
            {todos.length > 0 ? (
                todos.map((todo) => (
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
