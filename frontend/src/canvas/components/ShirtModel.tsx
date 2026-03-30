import { Decal, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import customizerStore from '../../store/customizerStore';
import useShirtTextures from '../hooks/useShirtTextures';
import type { ShirtGLTFResult } from '../model/shirt.types';

function ShirtModel() {
    const snapshot = useSnapshot(customizerStore);
    const { materials, nodes } = useGLTF(
        '/shirt_baked.glb',
    ) as unknown as ShirtGLTFResult;
    const { fullTexture, logoTexture } = useShirtTextures({
        fullDecal: snapshot.fullDecal,
        logoDecal: snapshot.logoDecal,
    });

    useFrame((_, delta) => {
        easing.dampC(materials.lambert1.color, snapshot.color, 0.25, delta);
    });

    return (
        <group scale={1.3}>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                dispose={null}
            >
                {snapshot.isFullTexture ? (
                    <Decal
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={1}
                        map={fullTexture}
                    />
                ) : null}

                {snapshot.isLogoTexture ? (
                    <Decal
                        position={[0, 0.04, 0.15]}
                        rotation={[0, 0, 0]}
                        scale={0.15}
                        map={logoTexture}
                        depthTest={false}
                    />
                ) : null}
            </mesh>
        </group>
    );
}

useGLTF.preload('/shirt_baked.glb');

export default ShirtModel;
