import type { TargetAndTransition, Transition } from 'framer-motion';

export type SlideDirection = 'left' | 'right' | 'up' | 'down';

interface MotionAnimationConfig {
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    exit?: TargetAndTransition;
    transition?: Transition;
}

export const transition: Transition = {
    type: 'spring',
    duration: 0.8,
};

export const slideAnimation = (
    direction: SlideDirection,
): MotionAnimationConfig => ({
    initial: {
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
        transition: {
            ...transition,
            delay: 0.5,
        },
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            ...transition,
            delay: 0,
        },
    },
    exit: {
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
        transition: {
            ...transition,
            delay: 0,
        },
    },
});

export const fadeAnimation: MotionAnimationConfig = {
    initial: {
        opacity: 0,
        transition: {
            ...transition,
            delay: 0.5,
        },
    },
    animate: {
        opacity: 1,
        transition: {
            ...transition,
            delay: 0,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            ...transition,
            delay: 0,
        },
    },
};

export const headTextAnimation: MotionAnimationConfig = {
    initial: {
        x: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    transition: {
        type: 'spring',
        damping: 5,
        stiffness: 40,
        restDelta: 0.001,
        duration: 0.3,
    },
};

export const headContentAnimation: MotionAnimationConfig = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    transition: {
        type: 'spring',
        damping: 7,
        stiffness: 30,
        restDelta: 0.001,
        duration: 0.6,
        delay: 0.2,
        delayChildren: 0.2,
    },
};

export const headContainerAnimation: MotionAnimationConfig = {
    initial: {
        x: -100,
        opacity: 0,
        transition: {
            ...transition,
            delay: 0.5,
        },
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            ...transition,
            delay: 0,
        },
    },
    exit: {
        x: -100,
        opacity: 0,
        transition: {
            ...transition,
            delay: 0,
        },
    },
};
