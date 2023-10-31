import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "../../../lib/api";

const CustomHookExercise = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    isFetching,
    isSuccess,
    data: user,
  } = useQuery({
    queryKey: ["users", selectedUser],
    queryFn: () => fetchUserById(selectedUser),
    enabled: Boolean(selectedUser),
  });

  return (
    <div>
      <h2>Select User</h2>
      <hr />
      <ul>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedUser("1");
            }}
          >
            tsevdos
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedUser("2");
            }}
          >
            joe
          </a>
        </li>
      </ul>
      {isFetching && <p>Loading...</p>}
      {isSuccess && (
        <div style={{ width: "300px" }}>
          <img alt={`${user.name} photo`} src={user.imgPath} width="300px" height="300px" />
          <h3>
            {user.name} ({user.username})
          </h3>
          <p>is admin: {user.admin ? "yes" : "no"}</p>
        </div>
      )}
    </div>
  );
};

export default CustomHookExercise;
