import getAllTodosCount from "@/lib/getAllTodosCount";
import StatisticsCard from "./StatisticsCard";
import getAllUsersCount from "@/lib/getAllUsersCount";

export default async function Statistics() {
    const todosCountData = getAllTodosCount();
    const usersCountData = getAllUsersCount();

    const [todosCount, usersCount] = await Promise.all([
        todosCountData,
        usersCountData,
    ]);

    const todosNoun = todosCount === 1 ? "Todo" : "Todos";
    const usersNoun = usersCount === 1 ? "User" : "Users";

    return (
        <section className="mt-2 flex w-fit flex-row flex-wrap justify-center gap-6 px-4 font-bold sm:mt-1">
            <StatisticsCard
                count={todosCount}
                label={`${todosNoun} tracket
                    at the moment!`}
            />
            <StatisticsCard
                count={usersCount}
                label={`${usersNoun} use our
                app!`}
            />
        </section>
    );
}
