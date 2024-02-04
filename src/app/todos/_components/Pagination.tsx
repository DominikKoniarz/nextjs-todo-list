type Props = {
    count: number;
};

export default function Pagination({ count }: Props) {
    return (
        <ul className="mx-auto mt-3 flex w-fit flex-row gap-4">
            <li className="">1</li>
            <li className="">2</li>
        </ul>
    );
}
