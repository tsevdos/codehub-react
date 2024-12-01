import Link from "next/link";
import { URLS } from "@/lib/constants";

const { users } = URLS;

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4">404 - Not Found</h2>
      <p className="text-lg mb-4">Could not find the specific user</p>
      <Link
        href={users}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Users page
      </Link>
    </div>
  );
};

export default NotFound;
