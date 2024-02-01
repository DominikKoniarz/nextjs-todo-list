import { redirect } from "next/navigation";
import getAuth from "@/lib/getAuth";
import Form from "./_components/Form";
import RegisterCTAs from "./_components/RegisterCTAs";
import { Toaster } from "react-hot-toast";

export default async function RegisterPage() {
	const session = await getAuth();

	if (session) redirect("/todos");

	return (
		<main className="flex flex-col items-center justify-center w-full h-full gap-8">
			<RegisterCTAs />
			<Form />
			<div className="mx-auto w-fit">other providers</div>
			<Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
		</main>
	);
}
