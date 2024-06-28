import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Wall = (props: any) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef() as any;
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <planeGeometry args={[5, 5]} />{" "}
      {/* Adjust the dimensions to make it wall-like */}
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export const Configurator3dLayout = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {/* Place and rotate walls to connect edge-to-edge */}
      <Wall position={[0, 0, 0]} rotation={[0, 0, 0]} /> {/* Front wall */}
      <Wall position={[2.5, 0, 2.5]} rotation={[0, -Math.PI / 2, 0]} />{" "}
      {/* Right wall */}
      <Wall position={[-2.5, 0, 2.5]} rotation={[0, Math.PI / 2, 0]} />{" "}
      {/* Left wall */}
      <OrbitControls />
    </Canvas>
  );
};
