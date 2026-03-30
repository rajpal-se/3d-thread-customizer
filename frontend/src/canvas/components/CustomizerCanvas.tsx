import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { Center, Environment } from '@react-three/drei';

import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import CanvasLoader from './CanvasLoader';
import ShirtModel from './ShirtModel';

function CustomizerCanvas() {
    return (
        <ErrorBoundary message="The 3D preview could not be rendered.">
            <Canvas
                id="customizer-canvas"
                shadows
                camera={{ position: [0, 0, 2.2], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
                className="h-full w-full"
            >
                <ambientLight intensity={0.5} />

                <Suspense fallback={<CanvasLoader />}>
                    <Environment preset="city" />

                    <Backdrop />

                    <CameraRig>
                        <Center>
                            <ShirtModel />
                        </Center>
                    </CameraRig>
                </Suspense>
            </Canvas>
        </ErrorBoundary>
    );
}

export default CustomizerCanvas;
