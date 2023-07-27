import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { VideoTexture } from "three";
import videoUrl from "../../assets/webvideo.mp4";
import styles from "./MainVideo.module.css";

function VideoBackground({ videoUrl }) {
  const video = useMemo(() => {
    const vid = document.createElement("video");
    vid.src = videoUrl;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  }, [videoUrl]);

  const texture = useMemo(() => new VideoTexture(video), [video]);

  const { viewport } = useThree();
  const ref = useRef();

  useFrame(() => (ref.current.material.map.needsUpdate = true));

  return (
    <mesh ref={ref} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
}

const MainVideo = () => (
  <div className={styles.container}>
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <Suspense fallback={null}>
        <VideoBackground videoUrl={videoUrl} />
      </Suspense>
    </Canvas>
    <div className={styles.contain}>
      <h1 className={styles.title}>DIVE INTO THE UNIVERSE OF</h1>
      <h1 className={styles.subtitle}>GOLDEN ROYCE DESIGN</h1>
      <div className={styles.btncont}>
        <button className={styles.btn}>Explore Now</button>
      </div>
    </div>
  </div>
);

export default MainVideo;