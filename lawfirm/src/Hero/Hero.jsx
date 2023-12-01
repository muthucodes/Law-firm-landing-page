import heroImage from "../assets/heroImage.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p className={styles.heading}>
              You don't have to{" "}
              <span className={styles.boldText}> Fight them Alone.</span>
            </p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, corrupti id! Ab praesentium, assumenda mollitia fugiat,
              obcaecati ea quos veritatis numquam.
            </p>
            <form className={styles.form}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className={styles.input}
              />
              <PrimaryButton>Let's Talk</PrimaryButton>
            </form>
          </div>
          <div className={styles.right}>
            <img src={heroImage} alt="lawyer assuring you" />
          </div>
        </div>
      </div>
    </>
  );
}
