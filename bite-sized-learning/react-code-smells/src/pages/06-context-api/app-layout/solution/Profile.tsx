import { useUser } from "./UserContext";

export default function Profile() {
  const { username, imgPath } = useUser();

  return (
    <div className="app-profile">
      <img src={imgPath} width="50px" height="50px" alt={username} />
      <span>{username}</span>
    </div>
  );
};
