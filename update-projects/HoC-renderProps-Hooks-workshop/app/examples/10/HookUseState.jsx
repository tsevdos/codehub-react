import React, { useState } from "react";

// export default function HookUseState () {
//   const [name, setName] = useState("John");

//   return (
//     <div>
//       <h2 className="is-size-4">Hooks</h2>
//       <h3 className="is-size-5">10: useState()</h3>
//       <br/>
//       <div>
//         <h4>Hello, {name}!</h4>
//         <div>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function HookUseState() {
  const [name, setName] = useState("John");
  const updateName = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2 className="is-size-4">Hooks</h2>
      <h3 className="is-size-5">10: useState()</h3>
      <br />
      <div>
        <h4>Hello, {name}!</h4>
        <input type="text" value={name} onChange={updateName} />
      </div>
    </div>
  );
}
