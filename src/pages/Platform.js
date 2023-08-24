import { Canvas, useFrame } from '@react-three/fiber';
import {
  Center,
  useGLTF,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
  useTexture,
  Decal,
} from '@react-three/drei';
import { useContext, useEffect, useRef } from 'react';
import { easing } from 'maath';
import { store } from '@/ContextProvider';

function Platform({ position = [0, 0, 2.5], fov = 25 }) {
  return (
    <div className='w-full min-h-full h-full relative pointer-events-none'>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        eventSource={document.getElementById('root')}
        eventPrefix='client'
        camera={{ position, fov }}
      >
        <ambientLight intensity={0.5} />
        <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr' />
        <CameraRig>
          <Center>
            <Shirt />
            <Backdrop />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
}

function Shirt(props) {
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb');
  const {
    color,
    decal,
    imageRotate,
    imageXPosition,
    imageYPosition,
    imageScale,
  } = useContext(store);
  const texture = useTexture(decal + '.png');
  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, color, 0.25, delta);
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      >
        <Decal
          position={[0 + imageXPosition, 0.04 + imageYPosition, 0.15]}
          rotation={[0, 0, imageRotate]}
          scale={0.15 * imageScale}
          opacity={1}
          map={texture}
          // map-anisotropy={16}
        />
      </mesh>
    </group>
  );
}
useGLTF.preload('/shirt_baked_collapsed.glb');
['react', 'three2', 'pmndrs'].forEach(useTexture.preload);

function Backdrop(params) {
  const shadows = useRef();

  const { color } = useContext(store);

  useFrame((state, delta) => {
    easing.dampC(
      shadows.current.getMesh().material.color,
      color,
      0.25,
      delta * 5
    );
  });

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={1.5}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={1.2}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

function CameraRig({ children }) {
  const { intro, setIntro } = useContext(store);

  const group = useRef();
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [intro ? state.viewport.width / 4 : 0, 0, 2],
      0.25,
      delta
    );
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

export default Platform;
