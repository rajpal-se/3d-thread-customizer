import { motion } from 'framer-motion';

import { scaleAnimation } from '../../lib/motion';

function CanvasPreviewFallback() {
    return (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_rgba(255,255,255,0.03)_62%)] px-6">
            <motion.div
                className="w-full max-w-xs rounded-[1.8rem] border border-white/14 bg-black/25 px-6 py-5 text-center text-stone-100 shadow-[0_24px_50px_rgba(0,0,0,0.24)] backdrop-blur-md"
                {...scaleAnimation}
            >
                <p className="text-[11px] font-semibold tracking-[0.24em] text-stone-200/70 uppercase">
                    Loading Studio
                </p>

                <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400" />
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-300 [animation-delay:180ms]" />
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500 [animation-delay:360ms]" />
                </div>

                <p className="mt-4 text-sm font-semibold text-stone-50">
                    Preparing the 3D customizer
                </p>

                <p className="mt-2 text-xs leading-5 text-stone-200/72">
                    The interactive preview loads separately so the app starts
                    faster.
                </p>
            </motion.div>
        </div>
    );
}

export default CanvasPreviewFallback;
