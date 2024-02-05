import PaginationItem from "./PaginationItem";

type Props = {
    count: number;
    selectedPage: number;
};

export default function Pagination({ count, selectedPage }: Props) {
    const pages = Math.ceil(count / 10);
    const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

    return (
        <ul className="mx-auto mt-1 flex w-fit flex-row gap-3">
            {pagesArray.map((page) => {
                if (
                    selectedPage === page ||
                    selectedPage === page + 1 ||
                    selectedPage === page - 1 ||
                    selectedPage === page + 2 ||
                    selectedPage === page - 2
                ) {
                    return (
                        <PaginationItem
                            key={page}
                            page={page}
                            selectedPage={selectedPage}
                        />
                    );
                } else return null;
            })}
        </ul>
    );
}
