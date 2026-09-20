import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div>
        <Link to="/" className={styles.brand}>
          React Patterns Demo
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
