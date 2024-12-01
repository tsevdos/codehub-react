import { notFound } from "next/navigation";
import UserCard from "@/components/UserCard";
import type { User } from "@/types/Users";

type UserProps = { params: { id: string } };

// SSR rendering
async function fetchUser(id: string): Promise<User | undefined> {
  const res = await fetch(`https://swapi.dev/api/people/${id}`, { cache: "no-store" });

  if (res.status === 404) {
    notFound();
    return;
  }

  return res.json();
}

const User = async ({ params }: UserProps) => {
  const user = await fetchUser(params.id);

  return <UserCard {...(user as User)} />;
};

export default User;
