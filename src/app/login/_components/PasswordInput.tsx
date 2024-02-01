import { Dispatch, SetStateAction } from "react";

type Props = {
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
};

export default function PasswordInput({ password, setPassword }: Props) {
    return (
        <label
            htmlFor="password-input"
            className="flex flex-col gap-1 text-lg font-bold"
        >
            Password:
            <input
                type="password"
                required
                className="p-2 text-base font-medium text-black transition-colors"
                id="password-input"
                name="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </label>
    );
}
