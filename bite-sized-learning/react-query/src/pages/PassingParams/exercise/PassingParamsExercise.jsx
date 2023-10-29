import { useState } from "react";

const PassingParams = () => {
  const [userState, setUserState] = useState({ isLoading: false, user: null });
  const { isLoading, user } = userState;

  const fetchUser = async (userID) => {
    setUserState((state) => ({ ...state, isLoading: true }));
    const response = await fetch(`http://localhost:3001/user/${userID}`);
    const user = await response.json();
    setUserState((state) => ({ ...state, isLoading: false, user }));
  };

  return (
    <div>
      <h2>Select ToDo</h2>
      <hr />
      <ul>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              fetchUser("1");
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
              fetchUser("2");
            }}
          >
            joe
          </a>
        </li>
      </ul>
      {isLoading && <p>Loading...</p>}
      {Boolean(user) && !isLoading && (
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

export default PassingParams;
