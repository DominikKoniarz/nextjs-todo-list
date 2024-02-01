"use server";

import prisma from "@/lib/prisma";
import { RegisterFormData } from "@/types/registerForm";
import { z } from "zod";
import { hashPassword } from "@/lib/passwords";

type RegisterErrors = {
    email?: string[] | undefined;
    username?: string[] | undefined;
    password?: string[] | undefined;
    alreadyExists?: string[] | undefined;
    serverError?: string[] | undefined;
};

const formSchema = z.object({
    email: z
        .string({
            invalid_type_error: "Valid email required!",
            required_error: "Email is required!",
        })
        .email({ message: "Valid email required!" }),
    username: z
        .string({
            invalid_type_error: "Valid username required!",
            required_error: "Username is required!",
        })
        .min(3, { message: "Username must be at least 3 characters long!" })
        .max(20, { message: "Username must be at most 20 characters long!" }),
    password: z
        .string({
            required_error: "Password is required!",
            invalid_type_error: "Valid password required!",
        })
        .min(8, { message: "Password must be at least 8 characters long!" })
        .max(25, { message: "Password must be at most 25 characters long!" }),
});

export default async function registerUser(
    data: RegisterFormData,
): Promise<RegisterErrors | null> {
    const result = formSchema.safeParse(data);

    if (!result.success) return result.error.formErrors.fieldErrors;

    try {
        const foundUser = await prisma.user.findUnique({
            where: {
                email: result.data.email,
            },
        });

        if (foundUser) return { alreadyExists: ["Email is already used!"] };

        const hashedPassword = await hashPassword(result.data.password);

        await prisma.user.create({
            data: {
                email: result.data.email,
                name: result.data.username,
                passwordHash: hashedPassword,
            },
        });

        return null;
    } catch (error) {
        return { serverError: ["Server error!"] };
    }
}
