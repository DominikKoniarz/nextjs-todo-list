import { FormState } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";
import type { RegisterFormData } from "@/types/registerForm";

const useToast = (formState: FormState<RegisterFormData>) => {
	useEffect(() => {
		Object.entries(formState.errors).forEach(([, value]) => {
			value.message && toast.error(value.message);
		});
	}, [formState]);
};

export default useToast;
