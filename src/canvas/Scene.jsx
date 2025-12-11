import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Torus, Float, Trail } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random/dist/maath-random.esm';

// Generate a soft glow texture programmatically
const useGlowTexture = () => {
    return useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const context = canvas.getContext('2d');
        const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(240, 240, 240, 1)');
        gradient.addColorStop(0.5, 'rgba(200, 200, 200, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 32, 32);
        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    }, []);
};

const GlowingParticles = () => {
    const pointsRef = useRef();
    const glowTexture = useGlowTexture();
    
    const count = 300;
    const [positions] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        random.inSphere(pos, { radius: 12 });
        return [pos];
    }, []);

    useFrame((state, delta) => {
        // Slow drift
        pointsRef.current.rotation.x -= delta / 50;
        pointsRef.current.rotation.y -= delta / 40;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                map={glowTexture} // The fix for "fat pixels"
                size={0.15}
                transparent
                opacity={0.8}
                alphaTest={0.01}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                color="#ffffff"
            />
        </points>
    );
};

const GeometricCore = () => {
    return (
        <group>
            {/* Outer Ring - Large Wireframe Torus */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                <Torus args={[2.2, 0.6, 16, 100]}>
                    <meshBasicMaterial color="#C0C0C0" wireframe transparent opacity={0.08} />
                </Torus>
            </Float>

            {/* Inner Core - Thinner, denser metallic Torus */}
            <Float speed={4} rotationIntensity={0.8} floatIntensity={0.5}>
                <Torus args={[1.5, 0.4, 16, 100]}>
                    <meshPhysicalMaterial 
                        color="#E5E5E5" 
                        roughness={0.1} 
                        metalness={1} 
                        transparent 
                        opacity={0.06}
                        wireframe
                        wireframeLinewidth={2}
                    />
                </Torus>
            </Float>
            
            {/* Glowing connecting nodes effect - Scattered points on a torus shape */}
             <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4}>
                <points>
                    <torusGeometry args={[2.2, 0.6, 32, 100]} />
                    <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
                </points>
            </Float>
        </group>
    );
};

// Container that handles all the "World Movement"
const WorldContainer = ({ children }) => {
    const group = useRef();
    const { mouse } = useThree();

    useFrame((state, delta) => {
        if (group.current) {
            // 1. Continuous "Spin" (Increased speed as requested)
            group.current.rotation.z += delta * 0.12; 
            
            // 2. Mouse & Scroll Interaction
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
            
            // LOGIC FIX: Map scroll position to a target rotation instead of accelerating continuously
            // This fixes the "moving too fast" issue.
            
            // Target Rotation state
            // Mouse slightly influences tilt (X/Y)
            // Scroll deeply influences Pitch (X) -> INCREASED MULTIPLIER for faster spin
            const targetRotX = (mouse.y * 0.3) + (scrollProgress * Math.PI * 0.8); 
            const targetRotY = (mouse.x * 0.3);
            
            // Supersmooth Transition (Dampening)
            // Lerp from current rotation to target rotation
            // Slightly increased speed (0.04 -> 0.06) for snappier response
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.06);
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.06);
            
            // 3D Depth Movement (Zoom/Pan based on scroll)
            // Move on Z axis for that "3D Website" flythrough feel
            // We target a position and lerp to it
            // Increased range (1.5 -> 2.5) for more dramatic "3D" movement
            const targetZ = scrollProgress * 2.5;
            group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, targetZ, 0.06);
        }
    });

    return <group ref={group}>{children}</group>;
};

const Scene = () => {
    return (
        <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            zIndex: -1,
            pointerEvents: 'none',
            background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
            transition: 'background 0.5s ease'
        }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#C0C0C0" />
                
                <WorldContainer>
                    <GeometricCore />
                    <GlowingParticles />
                </WorldContainer>
            </Canvas>
        </div>
    )
}

export default Scene;
