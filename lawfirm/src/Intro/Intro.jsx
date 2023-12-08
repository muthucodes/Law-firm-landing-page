import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p className={styles.heading}>Let's introduce Ourself</p>
          </div>
          <div className={styles.right}>
            <p className={styles.subheading}>Criminal Lawyer</p>
            <p className={styles.description}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit
              Exercitatio
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
