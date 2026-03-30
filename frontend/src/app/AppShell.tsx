import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import CustomizerPanel from '../features/customizer/components/CustomizerPanel';
import Home from '../features/customizer/components/Home';
import { fadeAnimation } from '../lib/motion';
import customizerStore from '../store/customizerStore';

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

                            <div className="relative flex min-h-[28rem] items-center justify-center rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_rgba(255,255,255,0.03)_62%)] p-6">
                                <div className="absolute inset-x-[15%] bottom-8 h-10 rounded-full bg-black/20 blur-2xl" />

                                <motion.div
                                    className="relative h-[24rem] w-[18rem] rounded-[4rem_4rem_2rem_2rem] border border-black/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_24px_50px_rgba(0,0,0,0.18)]"
                                    animate={{
                                        backgroundColor: snapshot.color,
                                        rotate: snapshot.intro ? -6 : 0,
                                        scale: snapshot.intro ? 0.92 : 1,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        ease: 'easeInOut',
                                    }}
                                    style={{
                                        backgroundImage: snapshot.isFullTexture
                                            ? `url(${snapshot.fullDecal})`
                                            : undefined,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: snapshot.isFullTexture
                                            ? 'cover'
                                            : undefined,
                                    }}
                                >
                                    <div className="absolute top-0 left-1/2 h-12 w-24 -translate-x-1/2 rounded-b-3xl bg-[#1a120d]/14" />

                                    <div className="absolute top-12 left-1/2 h-8 w-34 -translate-x-1/2 rounded-full border border-black/10 bg-white/12 blur-[1px]" />

                                    <div className="absolute inset-y-16 left-0 w-10 rounded-r-full bg-black/10" />
                                    <div className="absolute inset-y-16 right-0 w-10 rounded-l-full bg-black/10" />

                                    {snapshot.isLogoTexture ? (
                                        <motion.img
                                            src={snapshot.logoDecal}
                                            alt="Logo decal preview"
                                            className="absolute top-[30%] left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl object-contain"
                                            animate={{ opacity: 1, scale: 1 }}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                        />
                                    ) : null}
                                </motion.div>
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
