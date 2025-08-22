import React, { useEffect } from "react";

function logMousePosition(e) {
  console.log({ x: e.clientX, y: e.clientY });
}

export default function HookUseEffect2() {
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h2 className="is-size-4">Hooks</h2>
      <h3 className="is-size-5">12: useEffect() with cleanup</h3>
    </div>
  );
}
