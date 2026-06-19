import UserInfo from "./UserInfo";

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <UserInfo />
      <nav>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
