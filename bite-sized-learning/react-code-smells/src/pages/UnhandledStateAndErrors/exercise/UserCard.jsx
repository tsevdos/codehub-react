import { useState, useEffect } from "react";

const UserCard = ({ title }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://api.npoint.io/6de0b6582667dc912fe8");
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <hr />
      {user && (
        <div style={{ width: "300px" }}>
          <img alt={user.name} src={user.imgPath} width="300px" height="300px" />
          <h3>
            {user.name} ({user.username})
          </h3>
          <p>
            JWT: {user.JWT} | is admin: {user.admin ? "yes" : "no"}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
