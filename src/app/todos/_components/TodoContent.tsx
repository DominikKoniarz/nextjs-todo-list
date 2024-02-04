type Props = {
    content: string;
    completed: boolean;
};

export default function TodoContent({ content, completed }: Props) {
    const completedClasses = completed ? "line-through" : "";

    return (
        <p
            className={`w-full overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold text-black disabled:text-black ${completedClasses}`}
        >
            {content}
        </p>
    );
}
