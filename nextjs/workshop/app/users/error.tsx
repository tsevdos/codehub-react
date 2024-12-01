"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center my-4 bg-gray-900 text-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
