import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => (
  <div className={styles.page}>
    <p className={styles.eyebrow}>React Patterns Workshop</p>
    <h1 className="demo-title">Demos</h1>
    <p className={styles.intro}>
      A hands-on collection of progressively built React examples. Choose a pattern from the sidebar and compare how
      each approach shapes component responsibilities.
    </p>
    <div className={styles.grid}>
      <article className={styles.card}>
        <span className={styles.cardNumber}>01</span>
        <h2>Stateful and stateless components</h2>
        <p>Separate data ownership from presentation and see how container components keep views focused.</p>
        <Link to="/ssc/1" className={styles.cardLink}>
          Explore SSC examples →
        </Link>
      </article>
      <article className={styles.card}>
        <span className={styles.cardNumber}>02</span>
        <h2>Render props</h2>
        <p>Share data-fetching behavior while leaving the rendered interface in the hands of the consumer.</p>
        <Link to="/rp/1" className={styles.cardLink}>
          Explore render props →
        </Link>
      </article>
      <article className={styles.card}>
        <span className={styles.cardNumber}>03</span>
        <h2>Custom hooks</h2>
        <p>Extract reusable stateful logic and return exactly the data each component needs.</p>
        <Link to="/ch/1" className={styles.cardLink}>
          Explore custom hooks →
        </Link>
      </article>
      <article className={styles.card}>
        <span className={styles.cardNumber}>04</span>
        <h2>Compound components</h2>
        <p>
          Build flexible component APIs by letting related pieces work together through shared state and composition.
        </p>
        <Link to="/cc/1" className={styles.cardLink}>
          Explore compound components →
        </Link>
      </article>
    </div>
  </div>
);

export default Home;
