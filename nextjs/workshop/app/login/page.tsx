import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <p className="text-lg mb-4">Please log in to access the dashboard.</p>
      <Link
        href="/admin?token=dummyToken"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </Link>
    </div>
  );
}
