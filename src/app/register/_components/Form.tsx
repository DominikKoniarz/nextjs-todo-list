"use client";

import useToast from "../_hooks/useToast";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import UsernameInput from "./UsernameInput";
import { FormProvider, useForm } from "react-hook-form";
import { RegisterFormData } from "@/types/registerForm";
import useOnSubmit from "../_hooks/useOnSubmit";
import HorizontalORLine from "@/components/HorizontalORLine";

export default function Form() {
    const methods = useForm<RegisterFormData>({
        mode: "onSubmit",
        reValidateMode: "onSubmit",
    });
    const { onSubmit, pending } = useOnSubmit(methods.reset);
    useToast(methods.formState);

    return (
        <FormProvider {...methods}>
            <form
                className="flex w-56 flex-col gap-3"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <EmailInput />
                <UsernameInput />
                <PasswordInput />
                <SubmitButton pending={pending} />
                <HorizontalORLine />
            </form>
        </FormProvider>
    );
}
