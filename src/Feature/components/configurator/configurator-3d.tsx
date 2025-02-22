import { useEffect, useRef, useState } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import pixlipImage from "../../../assets/dummy.jpg";

const createCustomBoxGeometry = (
  width: number,
  height: number,
  depth: number
) => {
  const geometry = new THREE.BoxGeometry(width, height, depth);
  const uvs = geometry.attributes.uv.array;

  // Front face
  uvs[0] = 1;
  uvs[1] = 1;
  uvs[2] = 1;
  uvs[3] = 1;
  uvs[4] = 1;
  uvs[5] = 1;
  uvs[6] = 0;
  uvs[7] = 1;

  return geometry;
};

const Wall = (props: any) => {
  const ref = useRef() as any;
  const edgesRef = useRef() as any;
  const texture = useLoader(THREE.TextureLoader, props.image as string);

  const geometry = createCustomBoxGeometry(
    props.length,
    props.height,
    props.thickness
  );

  // Materials for each face
  const materials = [
    new THREE.MeshStandardMaterial({ color: props.color }), // Front
    new THREE.MeshStandardMaterial({ color: props.color }), // Back
    new THREE.MeshStandardMaterial({ color: props.color }), // Top
    new THREE.MeshStandardMaterial({ color: props.color }), // Bottom
    new THREE.MeshStandardMaterial({ map: texture, color: props.color }), // Left
    new THREE.MeshStandardMaterial({ color: props.color }), // Right
  ];

  return (
    <>
      <mesh
        {...props}
        ref={ref}
        scale={1}
        position={[props.position[0], props.position[1], props.position[2]]}
        geometry={geometry}
      >
        {materials.map((material, index) => (
          <meshStandardMaterial
            key={index}
            attach={`material-${index}`}
            {...material}
          />
        ))}
      </mesh>
      <lineSegments
        ref={edgesRef}
        position={[props.position[0], props.position[1], props.position[2]]}
        rotation={props.rotation}
      >
        <edgesGeometry
          args={[
            new THREE.BoxGeometry(props.length, props.height, props.thickness),
          ]}
        />
        <lineBasicMaterial color="black" />
      </lineSegments>
    </>
  );
};

const CounterBox = (props: any) => {
  const ref = useRef() as any;
  const texture = useLoader(THREE.TextureLoader, props.image as string);
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 0.36]} />
      <meshStandardMaterial attach="material-0" color="white" />
      <meshStandardMaterial attach="material-1" color="white" />
      <meshStandardMaterial attach="material-2" color="white" />
      <meshStandardMaterial attach="material-3" color="white" />
      <meshStandardMaterial attach="material-4" color="white" />
      <meshStandardMaterial attach="material-5" color="white" map={texture} />
    </mesh>
  );
};

const Floor = (props: any) => {
  const { length, width } = props;
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[length, width]} />
      <meshStandardMaterial color={"#37393E"} />
    </mesh>
  );
};

const CameraController = () => {
  const { camera, gl } = useThree<any>();

  useEffect(() => {
    const handleResize = () => {
      const aspect = window.innerWidth / window.innerHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [camera, gl]);

  return null;
};

interface ConfiguratorProps {
  height: number;
  width: number;
  length: number;
  numberOfWall?: number;
  numberOfCounter?: number;
  wallImage: string | null;
}
export const Configurator3dLayout = ({
  height = 2,
  width = 3,
  length = 3,
  numberOfWall = 2,
  numberOfCounter = 1,
  wallImage,
}: ConfiguratorProps) => {
  if (!wallImage) {
    wallImage = pixlipImage;
  }
  const [dimensions, setDimensions] = useState({
    wallHeight: height,
    floorWidth: width,
    floorLength: length,
    noOfWalls: numberOfWall,
    numberOfCounter: numberOfCounter,
  });

  useEffect(() => {
    setDimensions((data) => ({
      ...data,
      wallHeight: height,
      noOfWalls: numberOfWall,
      numberOfCounter: numberOfCounter,
      floorLength: length,
      floorWidth: width,
    }));
  }, [height, width, length, numberOfWall, numberOfCounter, wallImage]);

  // Adjust wall lengths based on floor dimensions
  const wallLengthFront = dimensions.floorLength;
  const wallLengthSide = dimensions.floorWidth;

  // Calculate positions based on wall height
  const wallPositionFront = [
    0,
    dimensions.wallHeight / 2,
    -dimensions.floorWidth / 2,
  ];
  const wallPositionRight = [
    dimensions.floorLength / 2,
    dimensions.wallHeight / 2,
    0,
  ];
  const wallPositionLeft = [
    -dimensions.floorLength / 2,
    dimensions.wallHeight / 2,
    0,
  ];
  const wallThickness = 0.2; // Set the wall thickness here

  // CounterBox position
  const counterPosition = [0, 0.5, dimensions.floorWidth / 2 - 1]; // Adjust the Y position to sit on top of the floor

  return (
    <Canvas
      style={{
        height: "calc(100vh - 150px)",
        width: "calc(100vw - 385px)",
        backgroundColor: "#fff",
      }}
      camera={{ position: [5, 5, 5], fov: 50 }}
    >
      <CameraController />
      <ambientLight intensity={3.5} />
      {/* Place and rotate floor */}
      <Floor
        position={[0, 0, 0]}
        length={dimensions.floorLength}
        width={dimensions.floorWidth}
      />
      {/* front wall */}
      <Wall
        position={wallPositionFront}
        rotation={[0, 0, 0]}
        length={wallLengthFront}
        height={dimensions.wallHeight}
        thickness={wallThickness}
        color="white"
        image={wallImage}
      />
      {/* left wall */}
      {dimensions.noOfWalls >= 2 && (
        <Wall
          position={wallPositionLeft}
          rotation={[0, Math.PI / 2, 0]}
          length={wallLengthSide}
          height={dimensions.wallHeight}
          thickness={wallThickness}
          color="white"
          image={wallImage}
        />
      )}
      {/* right wall */}
      {dimensions.noOfWalls > 2 && (
        <Wall
          position={wallPositionRight}
          rotation={[0, -Math.PI / 2, 0]}
          length={wallLengthSide}
          height={dimensions.wallHeight}
          thickness={wallThickness}
          color="white"
          image={wallImage}
        />
      )}
      {/* Add CounterBox at the bottom of the floor */}
      <CounterBox
        image={wallImage}
        position={counterPosition}
        rotation={[0, Math.PI, 0]}
      />
      {/* Add controls for orbiting */}
      <OrbitControls
        minDistance={1}
        maxDistance={50}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
      />
    </Canvas>
  );
};
