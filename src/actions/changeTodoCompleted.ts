"use server";

import getAuth from "@/lib/getAuth";
import logError from "@/lib/logError";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type ErrorResponse = {
    error: string;
};

const changeTodoCompleted = async (
    id: string,
): Promise<ErrorResponse | null> => {
    try {
        const session = await getAuth();
        if (!session) return { error: "You are not logged in" };

        const foundTodo = await prisma.todo.findUnique({
            where: {
                id,
                userId: session.user.id,
            },
            select: {
                id: true,
                completed: true,
            },
        });
        if (!foundTodo) return { error: "Todo not found" };

        await prisma.todo.update({
            data: {
                completed: !foundTodo.completed,
            },
            where: {
                id,
            },
        });

        revalidatePath("/todos");
        return null;
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : "Server error occurred while changing todo completed status";
        logError("addTodo", errorMessage);
        return { error: "Server error occurred" };
    }
};

export default changeTodoCompleted;
