import { useFormContext } from "react-hook-form";
import { z } from "zod";

const emailSchema = z.string().email();

export default function EmailInput() {
	const { register } = useFormContext();

	return (
		<label
			htmlFor="email-input"
			className="font-bold flex text-lg flex-col gap-1"
		>
			Email:
			<input
				type="email"
				required
				className="p-2 text-black font-medium transition-colors text-base"
				id="email-input"
				{...register("email", {
					required: "Email is required!",
					validate: (email) =>
						emailSchema.safeParse(email).success || "Invalid email!",
				})}
			/>
		</label>
	);
}
