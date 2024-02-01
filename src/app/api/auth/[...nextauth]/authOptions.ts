import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import authorize from "./authorize";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { Adapter } from "next-auth/adapters";

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Your email",
                },
                password: { label: "Password", type: "password" },
            },
            authorize,
        }),
    ],
};

export default authOptions;
