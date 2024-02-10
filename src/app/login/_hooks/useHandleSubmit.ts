"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";
import toast from "react-hot-toast";

const useHandleSubmit = () => {
    const [pending, setPending] = useState<boolean>(false);
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

        setPending(true);

        const response = await signIn("credentials", {
            email,
            password,
            redirect: false,
            // callbackUrl: "/todos",
        });

        setPending(false);

        if (response && !response.ok)
            return toast.error("Invalid credentials!");

        startTransition(() => router.push("/todos"));
    };

    return { handleSubmit, pending };
};

export default useHandleSubmit;
