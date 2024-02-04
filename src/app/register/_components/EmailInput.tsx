import { useFormContext } from "react-hook-form";
import { z } from "zod";

const emailSchema = z.string().email();

export default function EmailInput() {
    const { register } = useFormContext();

    return (
        <label
            htmlFor="email-input"
            className="flex flex-col gap-1 text-base font-bold"
        >
            Email:
            <input
                type="email"
                required
                className="p-2 font-medium text-black transition-colors"
                id="email-input"
                placeholder="Your email"
                {...register("email", {
                    required: "Email is required!",
                    validate: (email) =>
                        emailSchema.safeParse(email).success ||
                        "Invalid email!",
                })}
            />
        </label>
    );
}
