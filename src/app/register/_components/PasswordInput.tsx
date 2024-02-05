import { useFormContext } from "react-hook-form";

export default function PasswordInput() {
    const { register } = useFormContext();

    return (
        <label
            htmlFor="password-input"
            className="flex flex-col gap-1 text-base font-bold"
        >
            Password:
            <input
                type="password"
                required
                className="p-2 font-medium text-black transition-colors"
                id="password-input"
                placeholder="********"
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
