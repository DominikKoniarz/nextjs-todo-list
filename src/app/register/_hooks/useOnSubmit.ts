"use client";

import registerUser from "@/actions/register";
import { RegisterFormData } from "@/types/registerForm";
import { useState } from "react";
import { UseFormReset } from "react-hook-form";
import toast from "react-hot-toast";

const useOnSubmit = (reset: UseFormReset<RegisterFormData>) => {
    const [pending, setPending] = useState<boolean>(false);

    const onSubmit = async (data: RegisterFormData) => {
        setPending(true);
        const result = await registerUser(data);
        setPending(false);

        if (result !== null) {
            Object.entries(result).forEach(([, value]) => {
                toast.error(value[0]);
            });
        } else {
            toast.success("Account created successfully!");
            reset();
        }
    };

    return { onSubmit, pending };
};

export default useOnSubmit;
