import React, { useState, useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { ConeGeometry, DoubleSide, MeshBasicMaterial, ShaderMaterial } from 'three'

extend({ ConeGeometry, MeshBasicMaterial })

const RainbowShaderMaterial = new ShaderMaterial({
    uniforms: {
      u_time: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`,
    fragmentShader: `
      uniform float u_time;
      varying vec2 vUv;
  
      vec3 rgb(float r, float g, float b) {
        return vec3(r / 255.0, g / 255.0, b / 255.0);
      }
  
      vec3 rainbow(float time) {
        float r = sin(time) * 127.0 + 128.0;
        float g = sin(time + 2.0 * 3.1416 / 3.0) * 127.0 + 128.0;
        float b = sin(time + 4.0 * 3.1416 / 3.0) * 127.0 + 128.0;
        return rgb(r, g, b);
      }
  
      void main() {
        gl_FragColor = vec4(rainbow(u_time + vUv.y), 1.0);
      }`,
    side: DoubleSide,
    transparent: true,
  });
  

  function Prism() {
    const [hovered, setHover] = useState(false)
    const mesh = useRef(null)
  
    useFrame((state, delta) => {
      if (mesh.current) {
        RainbowShaderMaterial.uniforms.u_time.value += delta
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01
      }
    })
  
    return (
      <mesh 
        ref={mesh}
        onPointerOver={(e) => setHover(true)} 
        onPointerOut={(e) => setHover(false)}
      >
        <coneGeometry args={[1, 2, 4]} attach="geometry" />
        {hovered 
          ? <primitive object={RainbowShaderMaterial} attach="material" /> 
          : <pointsMaterial attach="material" color="white" size={0.1} />}
      </mesh>
    )
  }
export default function PrismComp() {
    return (
        <div>
            <Canvas camera={{ position: [0, 2.5, 2.5] }} onCreated={({ camera }) => camera.lookAt(0, 1, 0)}>
                <ambientLight />
                <Prism />
            </Canvas>
        </div>
    )
}