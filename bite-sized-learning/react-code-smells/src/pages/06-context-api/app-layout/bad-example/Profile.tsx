import { User } from "./App";

export default function Profile({ user }: { user: User; }) {
  const { username, imgPath } = user;

  return (
    <div className="app-profile">
      <img src={imgPath} width="50px" height="50px" alt={username} />
      <span>{username}</span>
    </div>
  );
};
