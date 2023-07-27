import Ball from "./Ball";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import styles from "./ContainComp.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.contentContainer} ${styles.topleft}`}>
        <img src={Image1} alt="image11" className={styles.image} />
        <div className={styles.contentWrapper}>
          <span>About Us</span>
          <p>
            We are a dynamic and innovative company specializing in three key
            verticals: Cyber Security, Digital Marketing & Advertising, and IT
            Solutions and Services.
          </p>
          <span>Know More</span>
        </div>
      </div>

      <div className={`${styles.contentContainer} ${styles.bottomright}`}>
        <img src={Image2} alt="image11" className={styles.image} />
        <div className={styles.contentWrapper}>
          <span>Why Us?</span>
          <p>
            Choose Golden Royce Design as your trusted partner for cyber
            security, digital marketing & advertising, and IT solutions and
            services.
          </p>
          <span>Know More</span>
        </div>
      </div>

      <Ball />
    </div>
  );
};

export default App;