import getAuth from "@/lib/getAuth";
import { redirect } from "next/navigation";

export default async function TodosPage() {
    const session = await getAuth();

    if (!session) redirect("/login");

    return (
        <main className="flex h-full w-full flex-col items-center justify-center gap-4">
            test
        </main>
    );
}
