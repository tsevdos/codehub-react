import useUser from "./useUser";

const UserCard = ({ title }) => {
  const user = useUser();

  return (
    <div>
      <h3 className="demo-title">{title}</h3>
      <hr className="demo-divider" />
      {user && (
        <div className="user-card">
          <img alt={user.name} src={user.imgPath} className="user-card-image" />
          <div className="user-card-body">
            <h3 className="user-card-name">
              {user.name} ({user.username})
            </h3>
            <p>
              JWT: {user.JWT} | is admin: {user.admin ? "yes" : "no"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
