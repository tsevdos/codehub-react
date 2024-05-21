import { useState } from "react";

const InputAndTextarea = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <h2>Form events: Input and textarea</h2>
      <hr />
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={updateName} />
      </div>
      <hr />
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea name="comment" value={comment} onChange={updateComment} />
      </div>
      <hr />
      <h3>{name}</h3>
      <h3>{comment}</h3>
    </div>
  );
};

export default InputAndTextarea;

// Exercise: Use only one event handler and state to manage both input and textarea fields. For example:
// const [formState, setFormState] = useState({
//   name: "",
//  comment: "",
// });
