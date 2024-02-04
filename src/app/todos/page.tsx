import getAuth from "@/lib/getAuth";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import getUserTodos from "@/lib/getUserTodos";
import ClientComponentsWrapper from "./_components/ClientComponentsWrapper";

export default async function TodosPage() {
    const session = await getAuth();

    if (!session) redirect("/login");

    const todos = await getUserTodos(session.user.id);

    return (
        <main className="flex h-full w-full flex-col items-center justify-center gap-4">
            <ClientComponentsWrapper todos={todos} />
            <Toaster
                position="bottom-right"
                toastOptions={{ duration: 2500 }}
            />
        </main>
    );
}
