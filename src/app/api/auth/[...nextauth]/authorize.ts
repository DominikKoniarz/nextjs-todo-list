import { verifyPassword } from "@/lib/passwords";
import prisma from "@/lib/prisma";
import { RequestInternal } from "next-auth";

export default async function authorize(
    credentials: Record<"email" | "password", string> | undefined,
    req: Pick<RequestInternal, "body" | "query" | "headers" | "method">,
) {
    if (!credentials || !credentials.email || !credentials.password)
        return null;

    try {
        const user = await prisma.user.findUnique({
            where: { email: credentials.email },
        });
        if (!user || !user.passwordHash) return null;

        const isPasswordValid = await verifyPassword(
            credentials.password,
            user.passwordHash,
        );
        if (!isPasswordValid) return null;

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
        };
    } catch (error) {
        // logging will be here
        console.log(error);
        return null;
    }
}
