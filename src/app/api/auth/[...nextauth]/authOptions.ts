import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import authorize from "./authorize";

const authOptions: NextAuthOptions = {
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
