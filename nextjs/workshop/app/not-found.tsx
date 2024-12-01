import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-4">Page Not Found</p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
