import { FaArrowUp } from "react-icons/fa";
import styles from "./Home.module.css";
import HeadSring from "../componenets/HeadSpring/HeadSring";
import MainVideo from "../componenets/MainVideo/MainVideo";
import TypeWriterEffect from "react-typewriter-effect";
import SecondComp from "../componenets/secondComp/ContainComp";
import ThirdComp from "../componenets/ThirdComp/ThirdComp";
// import TeamCarousel from "../componenets/TeamComp/TeamComp";
import { Canvas } from "@react-three/fiber";
import { TeamComp } from "../componenets/TeamComp/TeamComp";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.centered}>
            <div className={styles.gridcenter}>
              <h2 className={styles.title}>GOLDEN ROYCE DESIGN</h2>
              <p>
                <span className={styles.textbold}>BUISNESS</span>{" "}
                <span>MADE</span>
                <span className={styles.textbold}>SMART</span>
              </p>
              <HeadSring />
              <div className={styles.gridcenter1}>
                <TypeWriterEffect
                  startDelay={100}
                  cursorColor="black"
                  text="POWERHOUSE OF"
                  typeSpeed={100}
                  eraseSpeed={100}
                  loop={true}
                  stopBlinkinOnComplete
                />
                <TypeWriterEffect
                  startDelay={120}
                  cursorColor="black"
                  text="CREATIVITY AND EXPERTISE"
                  typeSpeed={100}
                  eraseSpeed={100}
                  loop={true}
                  stopBlinkinOnComplete
                />
              </div>
              <p className={styles.infocontent}>
                <span className={styles.contain2}>
                  IT Services & Solutions{" "}
                  <FaArrowUp className={styles.containicon} />
                </span>
                <span className={styles.contain2}>
                  BUZZ - Y - BEE <FaArrowUp className={styles.containicon} />
                </span>
                <span className={styles.contain2}>
                  Cyber Security <FaArrowUp className={styles.containicon} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <MainVideo />
      <SecondComp />
      <ThirdComp />
      {/* <TeamCarousel />     */}
      <div class="Team">
        <Canvas shadows camera={{ position: [0, 0, 20], fov: 30 }}>
          <TeamComp />
        </Canvas>
      </div>

    </>
  );
};

export default Home;