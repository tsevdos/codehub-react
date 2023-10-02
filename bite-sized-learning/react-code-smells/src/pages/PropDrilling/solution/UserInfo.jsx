import useUser from "./useUser";

const UserInfo = () => {
  const { name, username, admin } = useUser();

  return (
    <div>
      <p>{name}</p>
      <p>
        ({username} {admin && "- admin"})
      </p>
    </div>
  );
};

export default UserInfo;
