import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';
import type { Section } from '../App';

interface Scene3DProps {
  currentSection: Section;
}

const Scene3D: React.FC<Scene3DProps> = ({ currentSection }) => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);

  // Generate floating particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ],
        scale: Math.random() * 0.1 + 0.05,
        speed: Math.random() * 0.02 + 0.01,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate main group
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }

    // Animate individual shapes
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.3;
      sphereRef.current.rotation.y = time * 0.2;
      sphereRef.current.position.y = Math.sin(time) * 0.5;
    }

    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.4;
      boxRef.current.rotation.z = time * 0.3;
      boxRef.current.position.x = Math.cos(time * 0.5) * 2;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.4;
      torusRef.current.position.z = Math.sin(time * 0.3) * 1.5;
    }

    if (octahedronRef.current) {
      octahedronRef.current.rotation.y = time * 0.5;
      octahedronRef.current.rotation.z = time * 0.2;
      octahedronRef.current.position.y = Math.cos(time * 0.7) * 1.5;
    }
  });

  // Change colors based on current section
  const getSectionColor = () => {
    switch (currentSection) {
      case 'hero':
        return '#8B5CF6'; // Purple
      case 'about':
        return '#06B6D4'; // Cyan
      case 'projects':
        return '#10B981'; // Emerald
      case 'skills':
        return '#F59E0B'; // Amber
      case 'contact':
        return '#9291EF'; // Red
      case 'experience':
        return '#8B5CF6'; // Emerald
      default:
        return '';
    }
  };

  const sectionColor = getSectionColor();

  return (
    <group ref={groupRef}>
      {/* Main geometric shapes */}
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={sectionColor}
          transparent
          opacity={0.6}
          wireframe
        />
      </Sphere>

      <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[4, 2, -2]}>
        <meshStandardMaterial
          color={sectionColor}
          transparent
          opacity={0.4}
          wireframe
        />
      </Box>

      <Torus ref={torusRef} args={[1, 0.4, 16, 100]} position={[-3, -1, 2]}>
        <meshStandardMaterial
          color={sectionColor}
          transparent
          opacity={0.5}
          wireframe
        />
      </Torus>

      <Octahedron ref={octahedronRef} args={[1.2]} position={[2, -3, 1]}>
        <meshStandardMaterial
          color={sectionColor}
          transparent
          opacity={0.3}
          wireframe
        />
      </Octahedron>

      {/* Floating particles */}
      {particles.map((particle, index) => (
        <Sphere
          key={index}
          args={[particle.scale, 8, 8]}
          position={particle.position as [number, number, number]}
        >
          <meshStandardMaterial
            color={sectionColor}
            transparent
            opacity={0.8}
            emissive={sectionColor}
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}

      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color={sectionColor} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
    </group>
  );
};

export default Scene3D;