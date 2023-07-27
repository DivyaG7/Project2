import {FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa"
import styles from './VerticalNavbar.module.css';
import image1 from "../../assets/chatbot.png";

const VerticalNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["social-links"]}>
        <a href="https://example.com/social-link-1" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://example.com/social-link-2" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://example.com/social-link-3" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
      <div className={styles["chatbot-icon"]}>
        <img src={image1} alt="Chatbot Icon" />
      </div>
    </div>
  );
};

export default VerticalNavbar;