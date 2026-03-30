import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import customizerStore from '../../store/customizerStore';
import type { ShirtGLTFResult } from '../model/shirt.types';

function ShirtModel() {
    const snapshot = useSnapshot(customizerStore);
    const { materials, nodes } = useGLTF(
        '/shirt_baked.glb',
    ) as unknown as ShirtGLTFResult;
    const logoTexture = useTexture(snapshot.logoDecal);
    const fullTexture = useTexture(snapshot.fullDecal);

    useFrame((_, delta) => {
        easing.dampC(materials.lambert1.color, snapshot.color, 0.25, delta);
    });

    return (
        <group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                scale={1.75}
                position={[0, -1.55, 0]}
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
