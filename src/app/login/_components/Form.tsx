"use client";

import HorizontalORLine from "@/components/HorizontalORLine";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import useHandleSubmit from "../_hooks/useHandleSubmit";

export default function Form() {
    const handleSubmit = useHandleSubmit();
    const [email, setEmail] = useState<string>("");
    const [passsword, setPassword] = useState<string>("");

    return (
        <form
            className="flex w-56 flex-col gap-4"
            onSubmit={(e) => handleSubmit(e, email, passsword)}
        >
            <EmailInput email={email} setEmail={setEmail} />
            <PasswordInput password={passsword} setPassword={setPassword} />
            <SubmitButton />
            <HorizontalORLine />
        </form>
    );
}
