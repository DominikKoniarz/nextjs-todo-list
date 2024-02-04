"use client";

import useAppURL from "@/hooks/useAppURL";
import { useSearchParams } from "next/navigation";

const useTodosPageURL = () => {
    const searchParams = useSearchParams();
    const appURL = useAppURL();

    const todosURL = new URL("/todos", appURL);
    todosURL.search = searchParams.toString();
    return todosURL;
};

export default useTodosPageURL;
