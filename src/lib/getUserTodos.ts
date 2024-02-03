import prisma from "./prisma";

export default async function getUserTodos(userId: string) {
    return await prisma.todo.findMany({
        where: { userId },
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
