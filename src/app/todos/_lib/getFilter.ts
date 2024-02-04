const getFilter = (filter?: string) => {
    if (!filter) return "all";
    else if (filter === "all") return "all";
    else if (filter === "todo") return "todo";
    else if (filter === "completed") return "completed";
    else return "all";
};

export default getFilter;
