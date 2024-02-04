import { Filters } from "@/types/todosPage";
import prisma from "./prisma";

export default async function getUserTodos(userId: string, filter: Filters) {
    return prisma.todo.findMany({
        where: {
            userId,
            completed:
                filter === "completed"
                    ? true
                    : filter === "todo"
                      ? false
                      : undefined,
        },
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            content: true,
            completed: true,
        },
    });
}
