import { useFormContext } from "react-hook-form";

export default function PasswordInput() {
	const { register } = useFormContext();

	return (
		<label
			htmlFor="password-input"
			className="font-bold flex text-lg flex-col gap-1"
		>
			Password:
			<input
				type="password"
				required
				className="p-2 text-black font-medium transition-colors text-base"
				id="password-input"
				{...register("password", {
					required: "Password is required!",
					minLength: {
						value: 8,
						message: "Password must be at least 8 characters long!",
					},
					maxLength: {
						value: 25,
						message: "Password must be at most 25 characters long!",
					},
				})}
			/>
		</label>
	);
}
