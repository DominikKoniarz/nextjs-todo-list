import { useSearchParams } from "next/navigation";
import getFilter from "../_lib/getFilter";
import { Filters } from "@/types/todosPage";

const useFilter = (): Filters => {
    const searchParams = useSearchParams();

    const filter = searchParams.get("filter");
    return getFilter(filter ?? undefined);
};

export default useFilter;
