import { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJoke(data.value);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Hooks: useEffect()</h2>
      <hr />
      <div>{isLoading ? <h3>Loading...</h3> : <h3>{joke}</h3>}</div>
    </div>
  );
};

export default UseEffect2;
