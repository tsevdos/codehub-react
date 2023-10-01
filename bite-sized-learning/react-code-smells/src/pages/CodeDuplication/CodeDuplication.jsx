import { useState } from "react";

const CodeDuplication = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [errorsData, setErrorsData] = useState([]);

  const fetchTrafficData = async () => {
    const response = await fetch("https://api.npoint.io/157ca596ba27de2df1ce");
    const data = await response.json();
    setTrafficData(data);
  };

  const fetchErrorData = async () => {
    const response = await fetch("https://api.npoint.io/e0c521123b42e8e2b9cc");
    const data = await response.json();
    setErrorsData(data);
  };

  return (
    <div>
      <h2>Component and code dublication</h2>
      <hr />
      <div>
        <h3>Website traffic</h3>
        {Boolean(trafficData.length) && (
          <img
            width="30"
            height="30"
            src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png"
          />
        )}
        {trafficData.length ? (
          trafficData.map((entry) => (
            <div key={entry.title}>
              <h3>{entry.title}</h3>
              <p>
                {entry.number} &nbsp;<span>{entry.percentage}</span>
              </p>
            </div>
          ))
        ) : (
          <button onClick={fetchTrafficData}>Fetch website traffic data</button>
        )}
      </div>
      <div>
        <h3>Website errors</h3>
        {Boolean(errorsData.length) && (
          <img width="30" height="30" src="https://cdn-icons-png.flaticon.com/512/753/753344.png" />
        )}
        {errorsData.length ? (
          errorsData.map((entry) => (
            <div key={entry.title}>
              <h3>{entry.title}</h3>
              <p>
                {entry.number} &nbsp;<span>{entry.percentage}</span>
              </p>
            </div>
          ))
        ) : (
          <button onClick={fetchErrorData}>Fetch website traffic data</button>
        )}
      </div>
    </div>
  );
};

export default CodeDuplication;
