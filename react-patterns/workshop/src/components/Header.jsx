import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-800 px-6 py-6">
    <nav>
      <div>
        <Link to="/" className="text-white text-2xl font-semibold">
          React Patterns Demo
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
