import getAuth from "@/lib/getAuth";
import { redirect } from "next/navigation";
import LoginCTAs from "./_components/LoginCTAs";
import Form from "./_components/Form";
import { Toaster } from "react-hot-toast";

export default async function LoginPage() {
    const session = await getAuth();

    if (session) redirect("/todos");

    return (
        <main className="flex h-full w-full flex-col items-center justify-center gap-8">
            <LoginCTAs />
            <Form />
            <Toaster
                position="bottom-right"
                toastOptions={{ duration: 4000 }}
            />
        </main>
    );
}
