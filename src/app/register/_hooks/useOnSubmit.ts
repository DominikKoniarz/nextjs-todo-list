import registerUser from "@/actions/register";
import { RegisterFormData } from "@/types/registerForm";
import { UseFormReset } from "react-hook-form";
import toast from "react-hot-toast";

const useOnSubmit = (reset: UseFormReset<RegisterFormData>) => {
	const onSubmit = async (data: RegisterFormData) => {
		const result = await registerUser(data);

		if (result !== null) {
			Object.entries(result).forEach(([, value]) => {
				toast.error(value[0]);
			});
		} else {
			toast.success("Account created successfully!");
			reset();
		}
	};

	return onSubmit;
};

export default useOnSubmit;
