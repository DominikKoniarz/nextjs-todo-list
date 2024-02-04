import { Checkbox } from "@/components/ui/checkbox";
import useChangeTodoCompletedAction from "../_hooks/useChangeTodoCompletedAction";

type Props = {
    id: string;
    completed: boolean;
    pending: boolean | undefined;
};

export default function CompletedCheckbox({ id, completed, pending }: Props) {
    const changeTodoCompletedAction = useChangeTodoCompletedAction();

    return (
        <Checkbox
            className="h-5 w-5"
            checked={completed}
            aria-disabled={pending}
            onClick={() => !pending && changeTodoCompletedAction(id)}
        />
    );
}
