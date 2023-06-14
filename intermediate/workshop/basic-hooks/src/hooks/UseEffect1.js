import React, { useState, useEffect } from "react";

const UseEffect1 = () => {
  const [counter, setCounter] = useState(0);
  const addOne = () => {
    setCounter((counter) => counter + 1);
  };
  useEffect(() => {
    console.log("useEffect demo");

    // return () => console.log("Unmount");
  }); // dependency array

  return (
    <div>
      <h2>Hooks 02: useEffect()</h2>
      <hr />
      <button onClick={addOne}>Counter {counter}</button>
    </div>
  );
};

export default UseEffect1;
