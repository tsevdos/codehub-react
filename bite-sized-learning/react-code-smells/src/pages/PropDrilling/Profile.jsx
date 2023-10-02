const Profile = ({ user }) => {
  const { username, imgPath } = user;

  return (
    <div className="profile">
      <img src={imgPath} width="20px" height="20px" />
      {username}
    </div>
  );
};

export default Profile;
