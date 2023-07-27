import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const STARS_COUNT = 10000

function Galaxy() {
    const [hovered, setHover] = useState(false)
    const particleGeo = useRef(new THREE.BufferGeometry())
    const particleMat = useRef(new THREE.PointsMaterial({
        color: 'white',
        size: 0.005
    }))
    const positions = useRef(new Float32Array(STARS_COUNT * 3)) // Multiply by 3 for x, y, z coordinates

    for(let i = 0; i < STARS_COUNT * 3; i++) {
        positions.current[i] = (Math.random() - 0.5) * 10  // Random value between -5 and 5
    }

    particleGeo.current.setAttribute('position', new THREE.BufferAttribute(positions.current, 3))

    useFrame(() => {
        if (hovered) {
            const positions = particleGeo.current.attributes.position.array
            for(let i = 0; i < STARS_COUNT * 3; i++) {
                positions[i] = (Math.random() - 0.5) * 10
            }
            particleGeo.current.attributes.position.needsUpdate = true // Required to update the GPU
        }
    })

    return (
        <points 
            geometry={particleGeo.current} 
            material={particleMat.current} 
            onPointerOver={(e) => setHover(true)} 
            onPointerOut={(e) => setHover(false)}
        />
    )
}

export default function GalaxyComp() {
    return (
        <Canvas>
            <Galaxy />
        </Canvas>
    )
}