import HomeCTAs from "./_components/HomeCTAs";
import Statistics from "./_components/Statistics";

export const revalidate = 60 * 60;

export default function Home() {
    return (
        <main className="flex h-full w-full flex-col items-center justify-center gap-4 px-4 pb-14 sm:gap-6">
            <HomeCTAs />
            <Statistics />
        </main>
    );
}
