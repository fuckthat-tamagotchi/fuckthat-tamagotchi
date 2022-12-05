import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GltfModel } from "../../../Components/GLTFModel";
import { Preload } from "@react-three/drei";

export const Visor = () => {
  const modelPath =
    "https://cloudflare-ipfs.com/ipfs/QmccE3iazMgVqSwbZCTGVEUy4SMoc5zj1WR2xCcjRRfE3N"; // ELEPHANT
  // "https://cloudflare-ipfs.com/ipfs/QmQDCQhNmHrsRDg1H4Kvg7HgYYeSJV3TibwMBu16Mtv6Bt"; // FERRET
  return (
    <Canvas style={{ height: "25rem", width: "20rem" }}>
      <ambientLight intensity={0.8} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} />
        <OrbitControls />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
