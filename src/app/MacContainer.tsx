import React from "react";
import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MacContainer = () => {
  const meshes: { [key: string]: THREE.Mesh } = {};
  const tex = useTexture("./red.jpg");
  const model = useGLTF("./mac.glb");

  model.scene.traverse((e) => {
    if (e instanceof THREE.Mesh) {
      meshes[e.name] = e;
    }
  });

  const screen = meshes["screen"];
  const matte = meshes["matte"];

  if (screen) {
    screen.rotation.x = THREE.MathUtils.degToRad(180);
  }

  if (matte && matte.material instanceof THREE.MeshStandardMaterial) {
    matte.material.map = tex;
    matte.material.emissiveIntensity = 0;
    matte.material.metalness = 0;
    matte.material.roughness = 1;
  }

  const data = useScroll();

  useFrame(() => {
    if (screen) {
      screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    }
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
