import UserInfo from "./UserInfo";

const Sidebar = ({ user }) => (
  <aside style={{ padding: "2rem" }}>
    <UserInfo user={user} />
    <nav>
      <ul>
        <li style={{ listStyleType: "none" }}>
          <a href="#">Link 1</a>
        </li>
        <li style={{ listStyleType: "none" }}>
          <a href="#">Link 2</a>
        </li>
        <li style={{ listStyleType: "none" }}>
          <a href="#">Link 3</a>
        </li>
        <li style={{ listStyleType: "none" }}>
          <a href="#">Link 4</a>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
