import getAuth from "@/lib/getAuth";
import { redirect } from "next/navigation";
import LoginCTAs from "./_components/LoginCTAs";
import Form from "./_components/Form";
import OtherProvidersLogin from "./_components/OtherProvidersLogin";
import NewAccountLink from "./_components/NewAccountLink";

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
