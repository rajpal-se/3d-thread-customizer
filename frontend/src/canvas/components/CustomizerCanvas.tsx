import { Canvas } from '@react-three/fiber';
import { Center, ContactShadows, Environment } from '@react-three/drei';

import CameraRig from './CameraRig';
import ShirtModel from './ShirtModel';

function CustomizerCanvas() {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 2], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className="h-full w-full"
        >
            <ambientLight intensity={0.65} />
            <directionalLight
                castShadow
                intensity={1.2}
                position={[2, 3, 2]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <Environment preset="city" />

            <CameraRig>
                <Center>
                    <ShirtModel />
                </Center>

                <ContactShadows
                    position={[0, -1.65, 0]}
                    opacity={0.45}
                    scale={7}
                    blur={2.4}
                    far={3.8}
                />
            </CameraRig>
        </Canvas>
    );
}

export default CustomizerCanvas;
