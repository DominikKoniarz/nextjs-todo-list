import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useTransition } from "react";
import toast from "react-hot-toast";

const useHandleSubmit = () => {
    const router = useRouter();
    const [, startTransition] = useTransition();

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
            // callbackUrl: "/todos",
        });

        if (response && !response.ok)
            return toast.error("Invalid credentials!");

        startTransition(() => router.push("/todos"));
    };

    return handleSubmit;
};

export default useHandleSubmit;
