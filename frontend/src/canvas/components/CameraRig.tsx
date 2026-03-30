import type { PropsWithChildren } from 'react';
import { useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import type { Group } from 'three';

import customizerStore from '../../store/customizerStore';

const ROTATION_LIMIT = (12 * Math.PI) / 180;

function CameraRig({ children }: PropsWithChildren) {
    const group = useRef<Group>(null);
    const snapshot = useSnapshot(customizerStore);

    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;

        let targetPosition: [number, number, number] = [0, -0.02, 2.45];

        if (snapshot.intro) {
            targetPosition = [0, 0, 2.55];

            if (isBreakpoint) {
                targetPosition = [0, 0, 2.7];
            }

            if (isMobile) {
                targetPosition = [0, 0.06, 3.05];
            }
        } else if (isMobile) {
            targetPosition = [0, 0, 2.9];
        } else {
            targetPosition = [0, -0.02, 2.45];
        }

        easing.damp3(state.camera.position, targetPosition, 0.25, delta);

        if (!group.current) {
            return;
        }

        easing.dampE(
            group.current.rotation,
            [
                state.pointer.y * ROTATION_LIMIT,
                -state.pointer.x * ROTATION_LIMIT,
                0,
            ],
            0.25,
            delta,
        );
    });

    return <group ref={group}>{children}</group>;
}

export default CameraRig;
