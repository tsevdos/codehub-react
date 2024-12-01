import Link from "next/link";
import { URLS } from "@/lib/constants";
import type { User } from "@/types/Users";

type UserCardProps = User & { id?: string };

const UserCard = ({ id, name, birth_year }: UserCardProps) => {
  return (
    <div className="bg-gray-800 text-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">
        {id ? <Link href={URLS.user(id)}>{name}</Link> : name}
      </h3>
      <p className="text-gray-400">Birth year: {birth_year}</p>
    </div>
  );
};

export default UserCard;
