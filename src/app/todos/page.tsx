import getAuth from "@/lib/getAuth";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import getUserTodos from "@/lib/getUserTodos";
import ClientComponentsWrapper from "./_components/ClientComponentsWrapper";
import getFilter from "./_lib/getFilter";
import getPage from "./_lib/getPage";
import getUserTodosCount from "@/lib/getUserTodosCount";

type Props = {
    searchParams: {
        filter?: string;
        page?: string;
    };
};

export default async function TodosPage({ searchParams }: Props) {
    const session = await getAuth();

    if (!session) redirect("/login");

    const filter = getFilter(searchParams.filter);
    const page = getPage(searchParams.page);

    const countData = getUserTodosCount(session.user.id, filter);
    const todosData = getUserTodos(session.user.id, filter, page);

    const [todos, count] = await Promise.all([todosData, countData]);

    if (todos.length === 0) redirect("/todos");

    return (
        <main className="flex h-full w-full flex-col items-center justify-center gap-4">
            <ClientComponentsWrapper
                todos={todos}
                count={count}
                selectedPage={page}
            />
            <Toaster
                position="bottom-right"
                toastOptions={{ duration: 2500 }}
            />
        </main>
    );
}
