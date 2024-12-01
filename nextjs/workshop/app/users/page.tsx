import UserCard from "@/components/UserCard";
import { UsersResponse } from "@/types/Users";

// SSR rendering
async function fetchUsers(): Promise<UsersResponse> {
  const res = await fetch("https://swapi.dev/api/people", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch users data");
  }

  return res.json();
}

const Users = async () => {
  const users = await fetchUsers();

  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.results.map((user) => (
        <UserCard key={user.url} id={user.url.split("/").filter(Boolean).pop() ?? ""} {...user} />
      ))}
    </div>
  );
};

export default Users;
