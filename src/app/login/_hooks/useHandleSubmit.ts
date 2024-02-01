import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useTransition } from "react";
import toast from "react-hot-toast";

const useHandleSubmit = () => {
    const [, startTransition] = useTransition();
    const router = useRouter();

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>,
        email: string,
        password: string,
    ) => {
        e.preventDefault();

        if (!email || !password)
            return toast.error("Both email and password are required!");

        const response = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (response && !response.ok) toast.error("Invalid credentials!");

        startTransition(() => router.push("/todos"));
    };

    return handleSubmit;
};

export default useHandleSubmit;
