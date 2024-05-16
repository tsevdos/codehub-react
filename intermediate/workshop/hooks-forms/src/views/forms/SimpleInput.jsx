import { useState } from "react";

const SimpleInput = () => {
  const [val, setVal] = useState("");
  const updateName = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <h2>Form events: Input</h2>
      <hr />
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={val} onChange={updateName} />
      </div>
      <h3>{val}</h3>
    </div>
  );
};

export default SimpleInput;
