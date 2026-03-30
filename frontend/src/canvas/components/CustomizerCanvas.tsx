import { Canvas } from '@react-three/fiber';
import { Center, Environment } from '@react-three/drei';

import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import Backdrop from './Backdrop';
import ShirtModel from './ShirtModel';

function CustomizerCanvas() {
    return (
        <ErrorBoundary message="The 3D preview could not be rendered.">
            <Canvas
                shadows
                camera={{ position: [0, 0, 2.2], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
                className="h-full w-full"
            >
                <ambientLight intensity={0.5} />
                <Environment preset="city" />

                <Backdrop />

                <Center>
                    <ShirtModel />
                </Center>
            </Canvas>
        </ErrorBoundary>
    );
}

export default CustomizerCanvas;
