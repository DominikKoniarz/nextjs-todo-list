import { useSearchParams } from "next/navigation";

type Filters = "all" | "todo" | "completed";

const useFilter = (): Filters => {
    const searchParams = useSearchParams();

    const filter = searchParams.get("filter");
    if (!filter) return "all";
    else if (filter === "all") return "all";
    else if (filter === "todo") return "todo";
    else if (filter === "completed") return "completed";
    else return "all";
};

export default useFilter;
