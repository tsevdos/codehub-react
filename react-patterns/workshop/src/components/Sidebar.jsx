import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => (
  <nav className={styles.sidebar} aria-label="Pattern examples">
    <section className={styles.section}>
      <h3 className={styles.heading}>Stateful and stateless components</h3>
      <ul className={styles.list}>
        <li>
          <Link to="/ssc/1" className={styles.link}>
            01: Starting Point
          </Link>
        </li>
        <li>
          <Link to="/ssc/2" className={styles.link}>
            02: Stateful and stateless components
          </Link>
        </li>
        <li>
          <Link to="/ssc/3" className={styles.link}>
            03: Stateful and stateless components
          </Link>
        </li>
        <li>
          <Link to="/ssc/exercise" className={styles.link}>
            SSC exercise
          </Link>
        </li>
      </ul>
    </section>
    <section className={styles.section}>
      <h3 className={styles.heading}>Render props</h3>
      <ul className={styles.list}>
        <li>
          <Link to="/rp/1" className={styles.link}>
            01: Starting Point
          </Link>
        </li>
        <li>
          <Link to="/rp/2" className={styles.link}>
            02: Render prop
          </Link>
        </li>
        <li>
          <Link to="/rp/3" className={styles.link}>
            03: Render prop with many props
          </Link>
        </li>
        <li>
          <Link to="/rp/4" className={styles.link}>
            04: Render prop with multiple arguments
          </Link>
        </li>
        <li>
          <Link to="/rp/5" className={styles.link}>
            05: Children render prop
          </Link>
        </li>
        <li>
          <Link to="/rp/exercise" className={styles.link}>
            Render prop exercise
          </Link>
        </li>
      </ul>
    </section>
    <section className={styles.section}>
      <h3 className={styles.heading}>Custom hooks</h3>
      <ul className={styles.list}>
        <li>
          <Link to="/ch/1" className={styles.link}>
            01: Starting Point
          </Link>
        </li>
        <li>
          <Link to="/ch/2" className={styles.link}>
            02: Custom hook
          </Link>
        </li>
        <li>
          <Link to="/ch/3" className={styles.link}>
            03: Pass parameters to custom hook
          </Link>
        </li>
        <li>
          <Link to="/ch/4" className={styles.link}>
            04: Return more complex data
          </Link>
        </li>
        <li>
          <Link to="/ch/exercise" className={styles.link}>
            Custom hook exercise
          </Link>
        </li>
      </ul>
    </section>
    <section className={styles.section}>
      <h3 className={styles.heading}>Compound Components</h3>
      <ul className={styles.list}>
        <li>
          <Link to="/cc/1" className={styles.link}>
            01: Starting point
          </Link>
        </li>
        <li>
          <Link to="/cc/2" className={styles.link}>
            02: Component composition
          </Link>
        </li>
        <li>
          <Link to="/cc/3" className={styles.link}>
            03: Compound components
          </Link>
        </li>
        <li>
          <Link to="/cc/4" className={styles.link}>
            04: Compound components
          </Link>
        </li>
      </ul>
    </section>
  </nav>
);

export default Sidebar;
