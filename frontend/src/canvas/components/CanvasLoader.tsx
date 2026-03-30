import { Html, useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';

import { scaleAnimation } from '../../lib/motion';

function CanvasLoader() {
    const { progress } = useProgress();
    const roundedProgress = Math.min(100, Math.max(0, Math.round(progress)));

    return (
        <Html center>
            <motion.div
                className="flex min-w-56 flex-col items-center rounded-[1.6rem] border border-white/15 bg-black/35 px-5 py-4 text-center text-stone-100 shadow-[0_18px_45px_rgba(0,0,0,0.26)] backdrop-blur-md"
                {...scaleAnimation}
            >
                <p className="text-[11px] font-semibold tracking-[0.24em] text-stone-200/75 uppercase">
                    Loading Preview
                </p>

                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 transition-[width] duration-300"
                        style={{ width: `${roundedProgress}%` }}
                    />
                </div>

                <p className="mt-3 text-sm font-semibold text-stone-50">
                    Preparing your shirt model
                </p>

                <p className="mt-1 text-xs leading-5 text-stone-200/75">
                    {roundedProgress}% loaded
                </p>
            </motion.div>
        </Html>
    );
}

export default CanvasLoader;
