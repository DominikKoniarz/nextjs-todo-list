export type TodoType = {
    id: string;
    content: string;
    completed: boolean;
    pending?: boolean;
};

export type Filters = "all" | "todo" | "completed";
