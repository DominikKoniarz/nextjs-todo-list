import { Dispatch, SetStateAction } from "react";

type Props = {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
};

export default function EmailInput({ email, setEmail }: Props) {
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
                name="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </label>
    );
}
