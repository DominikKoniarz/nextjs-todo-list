export default function HorizontalORLine() {
    return (
        <div
            className="relative mx-auto my-1 flex h-8 w-56 flex-col justify-center"
            aria-hidden={true}
        >
            <hr className="h-0.5 w-full rounded-sm bg-white" />
            <div className="absolute left-1/2 block h-fit w-fit -translate-x-1/2 rounded-md border bg-slate-800 px-2 py-0.5 text-base uppercase">
                or
            </div>
        </div>
    );
}
