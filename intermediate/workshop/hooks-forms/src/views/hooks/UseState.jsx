import { useState } from "react";

export default function UseState() {
  const [name, setName] = useState("John");
  const updateName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>Hooks: useState()</h2>
      <hr />
      <div>
        <h3>Hello, {name}!</h3>
        <div>
          <input type="text" value={name} onChange={updateName} />
        </div>
      </div>
    </div>
  );
}

// Note: same as
// <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
