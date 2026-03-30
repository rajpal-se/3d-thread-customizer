import { lazy, Suspense } from 'react';

import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import CanvasPreviewFallback from '../canvas/components/CanvasPreviewFallback';
import CustomizerPanel from '../features/customizer/components/CustomizerPanel';
import Home from '../features/customizer/components/Home';
import { fadeAnimation } from '../lib/motion';
import customizerStore from '../store/customizerStore';

const CustomizerCanvas = lazy(
    () => import('../canvas/components/CustomizerCanvas'),
);

function AppShell() {
    const snapshot = useSnapshot(customizerStore);

    return (
        <motion.main
            className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#342114,_#1f130b_42%,_#120c08)] text-stone-100"
            {...fadeAnimation}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(249,115,22,0.22),_transparent_25%),radial-gradient(circle_at_80%_18%,_rgba(251,191,36,0.16),_transparent_20%),radial-gradient(circle_at_50%_75%,_rgba(217,78,40,0.16),_transparent_24%)]" />

            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/8 to-transparent" />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-8 md:px-10">
                <motion.section
                    className="flex w-full max-w-6xl justify-center"
                    animate={{
                        x: snapshot.intro ? '18%' : '0%',
                        scale: snapshot.intro ? 0.94 : 1,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <div className="relative w-full max-w-[38rem] rounded-[2.4rem] border border-white/12 bg-white/6 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur md:p-8">
                        <div className="absolute inset-0 rounded-[2.4rem] bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]" />

                        <div className="relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-6 md:p-8">
                            <div className="mb-5 flex items-center justify-between text-xs font-semibold tracking-[0.24em] text-stone-200/75 uppercase">
                                <span>Live Preview</span>
                                <span>
                                    {snapshot.intro ? 'Intro' : 'Editing'}
                                </span>
                            </div>

                            <div className="relative h-[28rem] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_rgba(255,255,255,0.03)_62%)] md:h-[34rem]">
                                <Suspense fallback={<CanvasPreviewFallback />}>
                                    <CustomizerCanvas />
                                </Suspense>

                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/18 to-transparent" />

                                <div className="pointer-events-none absolute right-4 bottom-4 rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-stone-100/70 uppercase backdrop-blur">
                                    {snapshot.isFullTexture
                                        ? 'Full Graphic'
                                        : snapshot.isLogoTexture
                                          ? 'Logo Graphic'
                                          : 'Base Fabric'}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>

            <Home />
            <CustomizerPanel />
        </motion.main>
    );
}

export default AppShell;
