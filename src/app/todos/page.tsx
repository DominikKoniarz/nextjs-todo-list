import getAuth from "@/lib/getAuth";
import { redirect } from "next/navigation";
import Form from "./_components/Form";
import SortingButtonsWrapper from "./_components/SortingButtonsWrapper";
import TodosList from "./_components/TodosList";
import HorizontalLine from "./_components/HorizontalLine";
import { Toaster } from "react-hot-toast";

export default async function TodosPage() {
    const session = await getAuth();

    if (!session) redirect("/login");

    return (
        <main className="flex h-full w-full flex-col items-center justify-center gap-4">
            <div className="flex h-full w-full max-w-96 flex-col gap-4 py-10">
                <Form />
                <SortingButtonsWrapper />
                <HorizontalLine />
                <TodosList />
            </div>
            <Toaster
                position="bottom-right"
                toastOptions={{ duration: 2500 }}
            />
        </main>
    );
}
