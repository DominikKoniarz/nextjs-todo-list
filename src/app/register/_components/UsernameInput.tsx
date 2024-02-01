import { useFormContext } from "react-hook-form";

export default function UsernameInput() {
	const { register } = useFormContext();

	return (
		<label
			htmlFor="username-input"
			className="font-bold flex text-lg flex-col gap-1"
		>
			Username:
			<input
				type="text"
				required
				className="p-2 text-black font-medium transition-colors text-base"
				id="username-input"
				{...register("username", {
					required: "Username is required!",
					minLength: {
						value: 3,
						message: "Username must be at least 3 characters long!",
					},
					maxLength: {
						value: 20,
						message: "Username must be at most 20 characters long!",
					},
				})}
			/>
		</label>
	);
}
