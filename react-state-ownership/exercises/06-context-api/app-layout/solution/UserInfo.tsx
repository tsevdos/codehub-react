import { useUser } from "./UserContext";

export default function UserInfo() {
  const { name, username, admin } = useUser();

  return (
    <div className="app-user-info">
      <p>{name}</p>
      <p>
        ({username} {admin && "- admin"})
      </p>
    </div>
  );
};
