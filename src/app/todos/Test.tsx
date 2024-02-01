"use client";

import { signOut } from "next-auth/react";

const Test = () => {
    return (
        <button onClick={() => signOut()} className="text-white">
            log out
        </button>
    );
};

export default Test;
