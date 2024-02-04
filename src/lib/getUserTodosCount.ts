import { Filters } from "@/types/todosPage";
import prisma from "./prisma";

export default async function getUserTodosCount(
    userId: string,
    filter: Filters,
) {
    return prisma.todo.count({
        where: {
            userId,
            completed:
                filter === "completed"
                    ? true
                    : filter === "todo"
                      ? false
                      : undefined,
        },
    });
}
