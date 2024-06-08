import { useState, useEffect } from "react";

const UserCard = ({ title }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-6">{title}</h3>
      {user && (
        <div className="w-1/3 bg-gray-200 rounded">
          <img alt={user.name} src={user.imgPath} className="rounded-t" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
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
