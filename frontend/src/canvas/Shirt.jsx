import React, { useEffect, useState } from "react"
import { easing } from "maath"
import { useSnapshot } from "valtio"
import { useFrame } from "@react-three/fiber"
import { Decal, useGLTF, useTexture } from "@react-three/drei"

import state from "../store"
import ErrorBoundary from "../components/ErrorBoundary"

const Shirt = () => {
    const snap = useSnapshot(state)
    const { nodes, materials } = useGLTF("/shirt_baked.glb")
    const [snapData, setSnapData] = useState(null)

    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)

    // snap.then((data) => {
    //     console.log(data);
    // });

    useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta))

    const stateString = JSON.stringify(snap)

    return (
        <ErrorBoundary message="Shirt">
            <group key={stateString}>
                <mesh
                    castShadow
                    geometry={nodes.T_Shirt_male.geometry}
                    material={materials.lambert1}
                    material-roughness={1}
                    dispose={null}
                >
                    {snap.isFullTexture && (
                        <Decal
                            position={[0, 0, 0]}
                            rotation={[0, 0, 0]}
                            scale={1}
                            map={fullTexture}
                        />
                    )}

                    {snap.isLogoTexture && (
                        <Decal
                            position={[0, 0.04, 0.15]}
                            rotation={[0, 0, 0]}
                            scale={0.15}
                            map={logoTexture}
                            // map-anisotropy={16}
                            depthTest={false}
                            depthWrite={true}
                        />
                    )}
                </mesh>
            </group>
        </ErrorBoundary>
    )
}

export default Shirt
