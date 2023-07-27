import TorusComp from "../../componenets/Animate/TorusComp";
import PrismComp from "../../componenets/Animate/PrismComp";
import GalaxyComp from "../../componenets/Animate/GalaxyComp";
import styles from "./ThirdComp.module.css";
function Header() {
  return <div className={styles.header}>OUR VERTICALS</div>;
}

function Component(props) {
  return (
    <div className={styles.component}>
      <h2 className={styles.heading}>Heading {props.number}</h2>
      <p className={styles.context}>
        This is the context for Component {props.number}.
      </p>
      {props.include}
      <a className={styles.link} href={`path/to/component${props.number}`}>
        Read More
      </a>
    </div>
  );
}

// Main App component
function ThirdComp() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles["flex-container"]}>
        <Component number={1} include={<TorusComp />} />
        <Component number={2} include={<PrismComp />} />
        <Component number={3} include={<GalaxyComp />} />
      </div>
    </div>
  );
}

export default ThirdComp;