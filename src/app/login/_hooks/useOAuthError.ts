"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useOAuthError = () => {
    const searchParams = useSearchParams();

    useEffect(() => {
        const error = searchParams.get("error");

        if (error === "OAuthAccountNotLinked") {
            const timer = setTimeout(() => {
                toast.error(
                    "This email is already used! Please login with your email and password.",
                    { id: "oauth-error" },
                );
            }, 0);

            return () => clearTimeout(timer);
        }
    }, [searchParams]);
};

export default useOAuthError;
