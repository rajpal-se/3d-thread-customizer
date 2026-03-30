import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { Center, Environment, OrbitControls } from '@react-three/drei';

import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import Backdrop from './Backdrop';
import CanvasLoader from './CanvasLoader';
import ShirtModel from './ShirtModel';

const ROTATION_LIMIT = (12 * Math.PI) / 180;
const DEFAULT_POLAR_ANGLE = Math.PI / 2;

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

                    <Center>
                        <ShirtModel />
                    </Center>
                </Suspense>

                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minAzimuthAngle={-ROTATION_LIMIT}
                    maxAzimuthAngle={ROTATION_LIMIT}
                    minPolarAngle={DEFAULT_POLAR_ANGLE - ROTATION_LIMIT}
                    maxPolarAngle={DEFAULT_POLAR_ANGLE + ROTATION_LIMIT}
                    rotateSpeed={0.9}
                />
            </Canvas>
        </ErrorBoundary>
    );
}

export default CustomizerCanvas;
