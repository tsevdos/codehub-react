import React, { useState, useEffect } from "react";

const UseEffect4 = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  useEffect(() => {
    const logMousePosition = (e) => {
      // console.log(e);
      const { clientX, clientY } = e;
      setX(clientX);
      setY(clientY);
    };

    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component HookUseEffect4 unmounted!");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h2>Hooks 05: useEffect()</h2>
      <hr />
      <h4>Mouse X</h4>
      <p>{x}</p>
      <h4>Mouse Y</h4>
      <p>{y}</p>
    </div>
  );
};

export default UseEffect4;
