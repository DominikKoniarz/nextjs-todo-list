import Link from "next/link";

export default function NewAccountLink() {
    return (
        <Link href="/register" className="mx-auto text-sm">
            Create new account here!
        </Link>
    );
}
