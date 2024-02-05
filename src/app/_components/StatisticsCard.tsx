type Props = {
    count: number;
    label: string;
};

export default function StatisticsCard({ count, label }: Props) {
    return (
        <article className="rounded-xl bg-white p-3 text-base text-black sm:p-4 sm:text-lg">
            <h2 className="flex flex-row items-center gap-2">
                <span className="shrink-0 text-2xl sm:text-3xl">{count}</span>
                {label}
            </h2>
        </article>
    );
}
