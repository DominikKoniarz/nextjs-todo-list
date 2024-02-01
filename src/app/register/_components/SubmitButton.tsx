"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			className="px-4 py-2 bg-white text-lg text-black rounded-lg font-bold mt-1 w-fit mx-auto capitalize aria-disabled:opacity-60 transition-color duration-100"
			aria-disabled={pending}
		>
			{pending ? "Loading..." : "Register"}
		</button>
	);
}
