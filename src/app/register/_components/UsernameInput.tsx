import { useFormContext } from "react-hook-form";

export default function UsernameInput() {
    const { register } = useFormContext();

    return (
        <label
            htmlFor="username-input"
            className="flex flex-col gap-1 text-base font-bold"
        >
            Username:
            <input
                type="text"
                required
                className="p-2 font-medium text-black transition-colors"
                id="username-input"
                placeholder="Your username"
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
