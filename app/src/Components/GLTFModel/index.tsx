import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ReactFC } from "../../Types/ReactFC";
import { useGLTF } from "@react-three/drei";

export const GltfModel: ReactFC<{
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}> = ({ modelPath, scale = 0.4, position = [0, -1, 0] }) => {
  const ref = useRef();
  const gltf = useGLTF(modelPath);

  useFrame(
    (state, delta) => ref.current && ((ref.current as any).rotation.y += 0.0015)
  );

  useEffect(() => {
    if (ref.current) {
      (ref.current as any).rotation.x = 0.4;
    }
  }, [ref]);

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={scale}
      />
    </>
  );
};
