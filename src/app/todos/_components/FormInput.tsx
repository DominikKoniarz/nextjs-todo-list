import { Dispatch, SetStateAction } from "react";

type Props = {
    newTodo: string;
    setNewTodo: Dispatch<SetStateAction<string>>;
};

export default function FormInput({ newTodo, setNewTodo }: Props) {
    return (
        <input
            type="text"
            name="todo"
            required
            id="todo"
            placeholder="Your todo"
            className="w-full rounded-lg p-2 text-black sm:p-3"
            autoComplete="off"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
        />
    );
}
