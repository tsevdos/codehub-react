import { User, Theme } from "./App";
import HeaderActions from "./HeaderActions";

type HeaderProps = {
  user: User;
  applicationTitle: string;
  theme: Theme;
  toggleTheme: () => void;
  toggleSidebar: () => void;
};

export default function Header({
  user,
  applicationTitle,
  theme,
  toggleTheme,
  toggleSidebar,
}: HeaderProps) {
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
      <HeaderActions
        user={user}
        theme={theme}
        toggleTheme={toggleTheme}
        toggleSidebar={toggleSidebar}
      />
    </header>
  );
};
