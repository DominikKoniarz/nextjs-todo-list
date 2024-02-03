import { Checkbox } from "@/components/ui/checkbox";
import { FaXmark } from "react-icons/fa6";

export default function Todo() {
    return (
        <li className="flex w-full flex-row items-center gap-3 rounded-lg bg-white px-3 py-2.5">
            <Checkbox className="h-5 w-5" />
            <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold text-black disabled:text-black">
                test dasd ad as das da das dadas dadsadadada ds d
            </p>
            <button
                type="button"
                className="rounded-full p-1 text-2xl text-red-500 transition-colors duration-150 hover:bg-gray-100"
            >
                <FaXmark />
            </button>
        </li>
    );
}
