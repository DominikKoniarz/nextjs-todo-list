import { redirect } from "next/navigation";
import getAuth from "@/lib/getAuth";
import Form from "./_components/Form";
import RegisterCTAs from "./_components/RegisterCTAs";
import OtherProvidersSignUp from "./_components/OtherProvidersSignUp";
import LoginLink from "./_components/LoginLink";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Todo List - Next.js - Register",
};

export default async function RegisterPage() {
    const session = await getAuth();

    if (session) redirect("/todos");

    return (
        <main className="flex h-full w-full flex-col items-center justify-center gap-5 py-3">
            <RegisterCTAs />
            <Form />
            <OtherProvidersSignUp />
            <LoginLink />
        </main>
    );
}
