import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

export default function getAuth() {
    return getServerSession(authOptions);
}
