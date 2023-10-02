const UserInfo = ({ user }) => {
  const { name, username, admin } = user;

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
