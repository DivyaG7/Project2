import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { TorusGeometry, Vector3, Quaternion } from 'three';

extend({ TorusGeometry })

function Torus({ mousePosition }) {
  const ref = useRef();
  const v = useRef(new Vector3());
  const q = useRef(new Quaternion());
  const angularVelocity = useRef(new Vector3());

  useFrame((_, delta) => {
    const randomValue = () => Math.random() * 0.1;
    angularVelocity.current.set(randomValue(), randomValue(), randomValue());

    q.current.setFromAxisAngle(angularVelocity.current, delta).normalize();
    ref.current.applyQuaternion(q.current);

    angularVelocity.current.lerp(v.current, 0.01);

    // Apply mouse rotation
    const rotationSpeed = 0.1;
    ref.current.rotation.x += mousePosition.y * rotationSpeed;
    ref.current.rotation.z += mousePosition.x * rotationSpeed;
  });

  return (
    <mesh ref={ref} position-y={1.0}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshNormalMaterial wireframe />
    </mesh>
  );
}

export default function TorusComp() {
  const torusRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animationId = setInterval(() => {
      if (torusRef.current) {
        torusRef.current.rotation.x += 0.01;
        torusRef.current.rotation.z += 0.01;
      }
    }, 16);

    return () => {
      clearInterval(animationId);
    };
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const mouseX = ((clientX - left) / width) * 2 - 1;
    const mouseY = -((clientY - top) / height) * 2 + 1;
    setMousePosition({ x: mouseX, y: mouseY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 2.5, 2.5] }} onCreated={({ camera }) => camera.lookAt(0, 1, 0)}>
        <Torus mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}