import { useState } from "react";
import WidgetEntry from "./WidgetEntry";

const Widget = ({ title, imageUrl, endpoint, btnTitle }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setData(data);
  };

  return (
    <div>
      <h3>{title}</h3>
      {Boolean(data.length) && <img width="30" height="30" src={imageUrl} />}
      {data.length ? (
        data.map((entry) => <WidgetEntry key={entry.title} {...entry} />)
      ) : (
        <button onClick={fetchData}>{btnTitle}</button>
      )}
    </div>
  );
};

export default Widget;
