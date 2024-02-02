import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
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
        // updateAge: 0,
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
            authorize: authorize,
        }),
        GoogleProvider({
            id: "google",
            name: "Google",
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            authorization: {
                params: {
                    prompt: "login",
                    access_type: "offline",
                    // response_type: "code",
                },
            },
        }),
    ],
};

export default authOptions;
