import React from "react";

export default function TodoItem({ id, title, done, toggleTodo }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={done} onChange={() => toggleTodo(id)} />&nbsp;
        { done ? <strike>{title}</strike> : <span>{title}</span> }
      </label>
    </li>
  );
}
