"use client";

import useToast from "../_hooks/useToast";
import EmailInput from "./EmailInput";
import HorizontalORLine from "./HorizontalORLine";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import UsernameInput from "./UsernameInput";
import { FormProvider, useForm } from "react-hook-form";
import { RegisterFormData } from "@/types/registerForm";
import useOnSubmit from "../_hooks/useOnSubmit";

export default function Form() {
	const methods = useForm<RegisterFormData>({
		mode: "onSubmit",
		reValidateMode: "onSubmit",
	});
	const onSubmit = useOnSubmit(methods.reset);
	useToast(methods.formState);

	return (
		<FormProvider {...methods}>
			<form
				className="flex flex-col w-56 gap-4"
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				<EmailInput />
				<UsernameInput />
				<PasswordInput />
				<SubmitButton />
				<HorizontalORLine />
			</form>
		</FormProvider>
	);
}
