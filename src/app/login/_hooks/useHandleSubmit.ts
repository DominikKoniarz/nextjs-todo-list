import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import toast from "react-hot-toast";

const useHandleSubmit = () => {
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
            redirect: true,
            callbackUrl: "/todos",
        });

        if (response && !response.ok)
            return toast.error("Invalid credentials!");
    };

    return handleSubmit;
};

export default useHandleSubmit;
