import getAuth from "@/lib/getAuth";
import { redirect } from "next/navigation";
import Test from "./Test";

export default async function TodosPage() {
    const session = await getAuth();

    if (!session) redirect("/login");

    return (
        <main className="flex h-full w-full items-center justify-center">
            <Test />
        </main>
    );
}
