export default function SortingButtonsWrapper() {
    return (
        <div className="flex flex-row items-center gap-4">
            <button
                type="button"
                className="w-1/3 rounded-md bg-white px-5 py-2 text-sm font-bold text-black"
            >
                All
            </button>
            <button
                type="button"
                className="w-1/3 rounded-md bg-white px-5 py-2 text-sm font-bold text-black"
            >
                To do
            </button>
            <button
                type="button"
                className="w-1/3 rounded-md bg-white px-5 py-2 text-sm font-bold text-black"
            >
                Completed
            </button>
        </div>
    );
}
