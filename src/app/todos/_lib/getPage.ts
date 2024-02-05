const getPage = (page?: string) => {
    const parsedPage = Number(page);
    if (isNaN(parsedPage)) {
        return 1;
    }

    if (parsedPage < 1) return 1;

    return parsedPage;
};

export default getPage;
