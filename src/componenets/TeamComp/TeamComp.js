// import { Suspense, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useGLTF, OrbitControls, Stage, CameraShake, useAnimations } from '@react-three/drei'


// useGLTF.preload('/robot.gltf')
// function Model(props) {
//   // const { scene, animations } = useGLTF('assets/potted_plant_01_4k.gltf');
//   // const { actions } = useAnimations(animations, scene);
//   // useEffect(() => {
//   //   actions.Idle.play()
//   //   scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
//   // }, [actions, scene])
//   // return <primitive object={scene} {...props} />
// }

// export default function Viewer() {
//   return (
//     <Canvas shadows camera={{ fov: 50 }}>
//       <Suspense fallback={null}>
//         <Stage contactShadow={{ opacity: 1, blur: 2 }}>
//           <Model />
//         </Stage>
//       </Suspense>
//       <OrbitControls makeDefault />
//       <CameraShake
//         maxYaw={0.1} 
//         maxPitch={0.1} 
//         maxRoll={0.1} 
//         yawFrequency={0.1} 
//         pitchFrequency={0.1} 
//         rollFrequency={0.1} 
//         intensity={1} 
//         decayRate={0.65}
//       />
//     </Canvas>
//   )
// }




import { RoundedBox, MeshPortalMaterial, CameraControls, useTexture, Environment } from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import {easing} from "maath";
import * as THREE from "three";
import {useEffect, useState, useRef} from "react";


export const TeamComp = () => {
    const[active, setActive] = useState(null);
    const controlsRef = useRef();
    const scene = useThree((state) => state.scene);

    useEffect(() => {
        if (active) {
            const targetPosition = new THREE.Vector3();
            scene.getObjectByName(active).getWorldPosition(targetPosition);
            controlsRef.current.setLookAt(
                0,
                0,
                20,
                0,
                0,
                0,
                true,
            )
        }
    }, [active]);

    return (
        <>
            <ambientLight intensity={0.5} />
            <Environment preset="sunset" />
            <CameraControls ref={controlsRef} />
            <ImageStage texture={"textures/realistic_water_fall.jpg"}
            active={active}
            setActive={setActive}
            />
            <ImageStage texture={"textures/realistic_water_fall - Copy.jpg"} position-x={-2.5} rotation-y={Math.PI / 8}
            active={active}
            setActive={setActive}
            />
            <ImageStage texture={"textures/realistic_water_fall.jpg"} position-x={2.5} rotation-y={-Math.PI / 8}
            active={active}
            setActive={setActive}
            />
        </>
    );
};

const ImageStage = ({texture, active, setActive, name, ...props}) => {
    const map = useTexture(texture);
    const portalMaterial = useRef();

    useFrame((_state, delta) => {
        const worldOpen = active === name;
        easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
    })

    return (<group {...props}>
        <RoundedBox name={name} args={[2, 3, 0.1]} onDoubleClick={() => setActive(active === name ? null : name)}>
                <planeGeometry args={[2, 3]} />
                <MeshPortalMaterial ref={portalMaterial}
                 side={THREE.DoubleSide}>
                    <ambientLight intensity={0.5} />
                    <Environment preset="sunset" />
                    <mesh>
                        <sphereGeometry args={[5, 64, 64]} />
                        <meshStandardMaterial map={map} side={THREE.BackSide} />
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
    </group>)
}


