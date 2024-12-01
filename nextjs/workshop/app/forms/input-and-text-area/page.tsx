"use client";

import { FC, useState, ChangeEvent } from "react";

const InputAndTextarea: FC = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const updateComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="flex flex-col bg-gray-900 text-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-6">Form events: input and textarea</h2>
      <hr className="w-full border-gray-700 mb-6" />

      <div className="w-full max-w-md mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={updateName}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="w-full max-w-md mb-4">
        <label htmlFor="comment" className="block text-sm font-medium mb-2">
          Comment:
        </label>
        <textarea
          name="comment"
          value={comment}
          onChange={updateComment}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500 min-h-[100px]"
        />
      </div>

      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <h3 className="text-xl font-semibold">{comment}</h3>
    </div>
  );
};

export default InputAndTextarea;
