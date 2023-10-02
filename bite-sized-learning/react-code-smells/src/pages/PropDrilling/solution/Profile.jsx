import useUser from "./useUser";

const Profile = () => {
  const { username, imgPath } = useUser();

  return (
    <div className="profile">
      <img src={imgPath} width="20px" height="20px" />
      {username}
    </div>
  );
};

export default Profile;
