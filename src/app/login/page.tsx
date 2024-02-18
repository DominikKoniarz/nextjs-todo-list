import getAuth from "@/lib/getAuth";
import { redirect } from "next/navigation";
import LoginCTAs from "./_components/LoginCTAs";
import Form from "./_components/Form";
import OtherProvidersLogin from "./_components/OtherProvidersLogin";
import NewAccountLink from "./_components/NewAccountLink";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
    const URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    return {
        title: "Todo List - Next.js - Login",
        alternates: {
            canonical: `${URL}/login`,
        },
    };
};

export default async function LoginPage() {
    const session = await getAuth();

    if (session) redirect("/todos");

    return (
        <main className="flex h-full w-full flex-col items-center justify-center gap-6 py-7">
            <LoginCTAs />
            <Form />
            <OtherProvidersLogin />
            <NewAccountLink />
        </main>
    );
}
