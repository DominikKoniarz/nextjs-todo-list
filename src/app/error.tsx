"use client";

import { FaTriangleExclamation } from "react-icons/fa6";

export default function Error() {
    return (
        <main className="flex h-full w-full flex-col items-center justify-center px-4 pb-14 font-bold text-white">
            <FaTriangleExclamation className="text-5xl xs:text-6xl" />
            <p className="mt-5 text-center text-lg xs:text-xl">
                Oops! Something went wrong!
            </p>
            <p className="mt-1.5 text-center text-base font-medium xs:text-lg">
                Please, contact our devs!
            </p>
        </main>
    );
}
