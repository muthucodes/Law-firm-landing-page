import styles from "./Card.module.css";

export default function Card({
  img,
  heading,
  bgColor,
  title,
  content,
  btn,
  btnContent,
}) {
  return (
    <>
      <div className={styles.wrapper} style={{ backgroundColor: bgColor }}>
        <img src={img} alt="" className={styles.image} />
        <p className={styles.heading}>{heading}</p>
        {title && <p className={styles.title}>{title}</p>}
        <p className={styles.content}>{content}</p>
        {btn && <button className={styles.button}>{btnContent}</button>}
      </div>
    </>
  );
}
