import Link from "next/link";

export default function LoginLink() {
    return (
        <Link href="/login" className="mx-auto text-sm">
            Already have account? Click here!
        </Link>
    );
}
