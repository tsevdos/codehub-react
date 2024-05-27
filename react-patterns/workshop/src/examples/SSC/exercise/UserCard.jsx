import { useState, useEffect } from "react";
import User from "./User";

const UserCard = ({ title }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return <User user={user} title={title} />;
};

export default UserCard;
