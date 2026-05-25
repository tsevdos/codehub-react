import { useAppConfig } from "./AppConfigContext";
import HeaderActions from "./HeaderActions";

export default function Header() {
  const { applicationTitle } = useAppConfig();

  return (
    <header className="app-header">
      <div className="app-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
          height="50px"
          alt="Logo"
        />
        <span className="app-title">{applicationTitle}</span>
      </div>
      <nav className="app-nav">
        <ul>
          <li>
            <a href="#">Menu item 1</a>
          </li>
          <li>
            <a href="#">Menu item 2</a>
          </li>
          <li>
            <a href="#">Menu item 3</a>
          </li>
        </ul>
      </nav>
      <HeaderActions />
    </header>
  );
};
