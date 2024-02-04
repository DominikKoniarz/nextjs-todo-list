const useAppURL = (): string => {
    return process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
};

export default useAppURL;
