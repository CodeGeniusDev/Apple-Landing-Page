import React from "react";
import { ScrollControls, useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MacContainer = () => {
  const meshes = {};
  const tex = useTexture("./red.jpg");
  const model = useGLTF("./mac.glb");

  model.scene.traverse((e) => {
      meshes[e.name] = e;
  });

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = tex;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;

  const data = useScroll();

  useFrame((state, delta) => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  })

  return (
    <>
      <group position={[0, -10, 20]}>
        <primitive object={model.scene} />
        {/* <mesh>
          <boxGeometry />
        </mesh> */}
      </group>
    </>
  );
};

export default MacContainer;
