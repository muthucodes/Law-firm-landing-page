import styles from "./WhyUs.module.css";
import Card from "../Card/Card";
import Gift from "../assets/gift.png";
export default function WhyUs() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.heading}>Why Choose us?</p>
          <div className={styles.cardsWrapper}>
            <Card
              img={Gift}
              heading={"98% Success Rate"}
              content={
                "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. elit officiaconsequatduis enim velit mollit Exer."
              }
              btn
              btnContent={"Read More"}
            />
            <Card
              img={Gift}
              heading={"100% Success Rate"}
              content={
                "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer."
              }
              btn
              btnContent={"Read More"}
              bgColor={"#2E2E2E"}
            />
            <Card
              img={Gift}
              heading={"100% Success Rate"}
              content={
                "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer."
              }
              btn
              btnContent={"Read More"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
