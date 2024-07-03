import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Wall = (props: any) => {
  const ref = useRef() as any;
  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      position={[props.position[0], props.position[1], props.position[2]]}
    >
      <boxGeometry args={[props.length, props.height, props.thickness]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

const CounterBox = (props: any) => {
  const ref = useRef() as any;
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1.5, 1, 1]} />
      <meshStandardMaterial attach="material-0" color="0xFFFFFF" />
      <meshStandardMaterial attach="material-1" color="black" />
      <meshStandardMaterial attach="material-2" color="black" />
      <meshStandardMaterial attach="material-3" color="black" />
      <meshStandardMaterial attach="material-4" color="black" />
      <meshStandardMaterial attach="material-5" color="grey" />
    </mesh>
  );
};

const Floor = (props: any) => {
  const { length, width } = props;
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[length, width]} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
};

interface ConfiguratorProps {
  height: number;
  width: number;
  length: number;
  numberOfWall?: number;
}
export const Configurator3dLayout = ({
  height = 2,
  width = 4,
  length = 4,
  numberOfWall = 2,
}: ConfiguratorProps) => {
  const [floorLength, setFloorLength] = useState(length);
  const [floorWidth, setFloorWidth] = useState(width);
  const [wallHeight, setWallHeight] = useState(height);
  const [noOfWalls, setNoOfWalls] = useState(numberOfWall);

  // Adjust wall lengths based on floor dimensions
  const wallLengthFront = floorLength;
  const wallLengthSide = floorWidth;

  // Calculate positions based on wall height
  const wallPositionFront = [0, -wallHeight / 2, -floorWidth / 2];
  const wallPositionRight = [floorLength / 2, -wallHeight / 2, 0];
  const wallPositionLeft = [-floorLength / 2, -wallHeight / 2, 0];
  const wallThickness = 0.2; // Set the wall thickness here

  // CounterBox position
  const counterPosition = [0, -wallHeight + 0.5, floorWidth / 2 - 1]; // Adjust the Y position to sit on top of the floor

  return (
    <Canvas
      style={{
        height: "calc(100vh - 200px)",
        width: "calc(100vw - 340px)",
      }}
      camera={{ position: [10, -1, 15], fov: 75 }}
    >
      <ambientLight intensity={Math.PI} />
      {/* Place and rotate floor */}
      <Floor
        position={[0, -wallHeight, 0]}
        length={floorLength}
        width={floorWidth}
      />
      {/* front wall */}
      <Wall
        position={wallPositionFront}
        rotation={[0, 0, 0]}
        length={wallLengthFront}
        height={wallHeight}
        thickness={wallThickness}
        color="red"
      />{" "}
      {/* left wall */}
      {numberOfWall >= 2 && (
        <Wall
          position={wallPositionLeft}
          rotation={[0, Math.PI / 2, 0]}
          length={wallLengthSide}
          height={wallHeight}
          thickness={wallThickness}
          color="white"
        />
      )}
      {/* right wall */}
      {numberOfWall > 2 && (
        <Wall
          position={wallPositionRight}
          rotation={[0, -Math.PI / 2, 0]}
          length={wallLengthSide}
          height={wallHeight}
          thickness={wallThickness}
          color="blue"
        />
      )}
      {/* Left wall */}
      {/* Add CounterBox at the bottom of the floor */}
      <CounterBox position={counterPosition} rotation={[0, Math.PI, 0]} />
      {/* Add controls for orbiting */}
      <OrbitControls
        minDistance={2}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};
