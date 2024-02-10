"use client";

import HorizontalORLine from "@/components/HorizontalORLine";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import useHandleSubmit from "../_hooks/useHandleSubmit";

export default function Form() {
    const { handleSubmit, pending } = useHandleSubmit();
    const [email, setEmail] = useState<string>("");
    const [passsword, setPassword] = useState<string>("");

    return (
        <form
            className="flex w-56 flex-col gap-3"
            onSubmit={(e) => handleSubmit(e, email, passsword)}
        >
            <EmailInput email={email} setEmail={setEmail} />
            <PasswordInput password={passsword} setPassword={setPassword} />
            <SubmitButton pending={pending} />
            <HorizontalORLine />
        </form>
    );
}
