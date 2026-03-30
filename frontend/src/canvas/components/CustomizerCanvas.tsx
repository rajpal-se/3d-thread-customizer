import { Canvas } from '@react-three/fiber';
import { Center, Environment } from '@react-three/drei';

import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import ShirtModel from './ShirtModel';

function CustomizerCanvas() {
    return (
        <ErrorBoundary message="The 3D preview could not be rendered.">
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
                    <Backdrop />

                    <Center>
                        <ShirtModel />
                    </Center>
                </CameraRig>
            </Canvas>
        </ErrorBoundary>
    );
}

export default CustomizerCanvas;
