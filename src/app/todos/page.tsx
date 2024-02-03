import getAuth from "@/lib/getAuth";
import { redirect } from "next/navigation";

export default async function TodosPage() {
    const session = await getAuth();

    if (!session) redirect("/login");

    return (
        <main className="flex h-full w-full flex-col items-center justify-center gap-4">
            <form className="flex flex-row items-center gap-4 text-lg font-bold">
                <input
                    type="text"
                    name="todo"
                    required
                    id="todo"
                    placeholder="Your todo"
                    className="rounded-lg p-3 text-black"
                />
                <button
                    type="submit"
                    className="h-full rounded-lg bg-white px-6 py-2 capitalize text-black"
                >
                    Add
                </button>
            </form>
        </main>
    );
}
