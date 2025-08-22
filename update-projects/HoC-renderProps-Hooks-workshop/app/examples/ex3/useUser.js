import { useState, useEffect } from "react";

export default function useUser () {
  const [user, setUser] = useState(null);

  useEffect(() => {

    if (!localStorage.getItem("user")) {
      fetch("https://api.myjson.com/bins/nkbdu")
        .then((res) => res.json())
        .then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        });
    } else {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return user;
}
