"use server";

import getAuth from "@/lib/getAuth";
import prisma from "@/lib/prisma";
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

const addTodo = async (formData: FormData): Promise<Status> => {
    try {
        const session = await getAuth();
        if (!session) return { error: "You must be logged in to add a todo!" };

        const result = formSchema.safeParse({ content: formData.get("todo") });
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

        return null;
    } catch (error) {
        // logging here will be
        return { error: "An error occurred while adding the todo!" };
    }
};

export default addTodo;
