import { useState } from "react";

const UseStateWithEvent = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = () => {
    setIsLoading(true);

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
  };

  return (
    <div>
      <h2>Hooks: useState() with event</h2>
      <hr />
      <div>
        <h3>{isLoading ? "Loading..." : joke}</h3>
      </div>
      <button type="primary" onClick={fetchQuote} disabled={isLoading}>
        Fetch Quote!
      </button>
    </div>
  );
};

export default UseStateWithEvent;
