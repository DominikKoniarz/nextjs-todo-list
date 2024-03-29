import { Filters } from "@/types/todosPage";
import prisma from "./prisma";

export default async function getUserTodos(
    userId: string,
    filter: Filters,
    page: number,
) {
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
        take: 10,
        skip: (page - 1) * 10,
    });
}
