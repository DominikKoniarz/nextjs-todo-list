"use server";

import getAuth from "@/lib/getAuth";
import logError from "@/lib/logError";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const formSchema = z.object({
    content: z
        .string({
            invalid_type_error: "Content must be a string!",
            required_error: "Content is required!",
        })
        .min(1, { message: "Content is required!" })
        .max(100, { message: "Content must be less than 100 characters!" }),
});

type Status = { error: string } | null;

const addTodo = async (newTodo: string): Promise<Status> => {
    try {
        const session = await getAuth();
        if (!session) return { error: "You must be logged in to add a todo!" };

        const result = formSchema.safeParse({ content: newTodo });
        if (!result.success) {
            return { error: result.error.errors[0].message };
        }

        await prisma.todo.create({
            data: {
                userId: session.user.id,
                completed: false,
                content: result.data.content,
            },
        });

        revalidatePath("/todos");

        return null;
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : "An error occurred while adding the todo!";
        logError("addTodo", errorMessage);
        return { error: "An error occurred while adding the todo!" };
    }
};

export default addTodo;
