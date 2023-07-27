import styles from "../Header/Header.module.css"
import NavBar from "../NavBar/NavBar.js";
const Header = () => {
  return (
      <div className={styles.container}>
        <NavBar />
      </div>
  );
};

export default Header;
