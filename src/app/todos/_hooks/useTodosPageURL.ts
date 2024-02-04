import useAppURL from "@/hooks/useAppURL";

const useTodosPageURL = () => {
    const appURL = useAppURL();

    return `${appURL}/todos`;
};

export default useTodosPageURL;
