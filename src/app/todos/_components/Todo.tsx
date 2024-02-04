import CompletedCheckbox from "./CompletedCheckbox";
import DeleteButton from "./DeleteButton";
import TodoContent from "./TodoContent";

type Props = {
    id: string;
    content: string;
    completed: boolean;
    pending?: boolean;
};

export default function Todo({ id, content, completed, pending }: Props) {
    const isPendingClasses = pending ? "opacity-50" : "";

    return (
        <li
            className={`flex w-full flex-row items-center gap-3 rounded-lg bg-white px-3 py-2.5 transition-all ${isPendingClasses}`}
        >
            <CompletedCheckbox
                id={id}
                completed={completed}
                pending={pending}
            />
            <TodoContent content={content} completed={completed} />
            <DeleteButton id={id} pending={pending} />
        </li>
    );
}
