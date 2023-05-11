import { Vector3 } from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { SpotLight, useDepthBuffer } from "@react-three/drei";
import sculpture from "./bigsculpture.obj";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import * as THREE from "three";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
export default function Canva() {
  const obj = useLoader(OBJLoader, sculpture);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [-2, 5, 6], fov: 50, near: 1, far: 20 }}
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#202020"]} />
      <fog attach="fog" args={["#202020", 5, 20]} />
      <ambientLight intensity={0.015} />
      <Scene obj={obj.children[0].geometry} />
    </Canvas>
  );
}

function Scene({ obj }) {
  const depthBuffer = useDepthBuffer({ frames: 1 });

  return (
    <>
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#0c8cbf"
        position={[4, 3, 2]}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#b00c3f"
        position={[3, 3, 0]}
      />
      <Suspense fallback={<CanvasLoader />}>
        <mesh
          scale={0.02}
          position={[1, -1.03, 0]}
          castShadow
          receiveShadow
          geometry={obj}
          material={new THREE.MeshPhongMaterial()}
          dispose={null}
        />
      </Suspense>
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial color={"#c8e1ee"} />
      </mesh>
    </>
  );
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      {...props}
    />
  );
}
