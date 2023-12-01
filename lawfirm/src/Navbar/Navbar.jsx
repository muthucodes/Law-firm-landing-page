import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Logo />
          <ol className={styles.links}>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Attorneys</button>
            </li>
            <li>
              <button>Practice Areas</button>
            </li>
            <li>
              <button>About Us</button>
            </li>
          </ol>
          <button className={styles.contactBtn}>Contact now</button>
        </div>
      </div>
    </>
  );
}
