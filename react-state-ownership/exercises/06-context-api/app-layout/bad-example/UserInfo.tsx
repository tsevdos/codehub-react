import { User } from "./App";

export default function UserInfo({ user }: { user: User; }) {
  const { name, username, admin } = user;

  return (
    <div className="app-user-info">
      <p>{name}</p>
      <p>
        ({username} {admin && "- admin"})
      </p>
    </div>
  );
};
