import { Link } from "react-router-dom";

const Sidebar = () => (
  <nav className="col-span-3 p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">
      Stateful and stateless components
    </h3>
    <ul className="flex flex-col space-y-1 mb-6">
      <li>
        <Link to="/ssc/1" className="text-gray-800 hover:font-semibold">
          01: Starting Point
        </Link>
      </li>
      <li>
        <Link to="/ssc/2" className="text-gray-800 hover:font-semibold">
          02: Stateful and stateless components
        </Link>
      </li>
      <li>
        <Link to="/ssc/3" className="text-gray-800 hover:font-semibold">
          03: Stateful and stateless components
        </Link>
      </li>
      <li>
        <Link to="/ssc/exercise" className="text-gray-800 hover:font-semibold">
          SSC exercise
        </Link>
      </li>
    </ul>
    <h3 className="text-xl font-bold text-gray-800 mb-2">Render props</h3>
    <ul className="flex flex-col space-y-1 mb-6">
      <li>
        <Link to="/rp/1" className="text-gray-800 hover:font-semibold">
          01: Starting Point
        </Link>
      </li>
      <li>
        <Link to="/rp/2" className="text-gray-800 hover:font-semibold">
          02: Render prop
        </Link>
      </li>
      <li>
        <Link to="/rp/3" className="text-gray-800 hover:font-semibold">
          03: Render prop with many props
        </Link>
      </li>
      <li>
        <Link to="/rp/4" className="text-gray-800 hover:font-semibold">
          04: Render prop with multiple arguments
        </Link>
      </li>
      <li>
        <Link to="/rp/5" className="text-gray-800 hover:font-semibold">
          05: Children render prop
        </Link>
      </li>
      <li>
        <Link to="/rp/exercise" className="text-gray-800 hover:font-semibold">
          Render prop exercise
        </Link>
      </li>
    </ul>
    <h3 className="text-xl font-bold text-gray-800 mb-2">Custom hooks</h3>
    <ul className="flex flex-col space-y-1 mb-6">
      <li>
        <Link to="/ch/1" className="text-gray-800 hover:font-semibold">
          01: Starting Point
        </Link>
      </li>
      <li>
        <Link to="/ch/2" className="text-gray-800 hover:font-semibold">
          02: Custom hook
        </Link>
      </li>
      <li>
        <Link to="/ch/3" className="text-gray-800 hover:font-semibold">
          03: Pass parameters to custom hook
        </Link>
      </li>
      <li>
        <Link to="/ch/4" className="text-gray-800 hover:font-semibold">
          04: Return more complex data
        </Link>
      </li>
      <li>
        <Link to="/ch/exercise" className="text-gray-800 hover:font-semibold">
          Custom hook exercise
        </Link>
      </li>
    </ul>

    <h3 className="text-xl font-bold text-gray-800 mb-2">
      Compound Components
    </h3>
    <ul className="flex flex-col space-y-1 mb-6">
      <li>
        <Link to="/cc/1" className="text-gray-800 hover:font-semibold">
          01: Starting point
        </Link>
      </li>
      <li>
        <Link to="/cc/2" className="text-gray-800 hover:font-semibold">
          02: Component composition
        </Link>
      </li>
      <li>
        <Link to="/cc/3" className="text-gray-800 hover:font-semibold">
          03: Compound components
        </Link>
      </li>
      <li>
        <Link to="/cc/4" className="text-gray-800 hover:font-semibold">
          04: Compound components
        </Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
