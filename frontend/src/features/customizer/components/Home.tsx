import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import Button from '../../../components/ui/Button';
import { enterCustomizer } from '../../../store/customizerActions';
import customizerStore from '../../../store/customizerStore';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from '../../../lib/motion';

function Home() {
    const snapshot = useSnapshot(customizerStore);

    return (
        <AnimatePresence>
            {snapshot.intro && (
                <motion.section
                    className="absolute inset-x-0 top-0 z-20 px-6 py-8 md:px-10"
                    {...slideAnimation('left')}
                >
                    <motion.header
                        className="mb-10"
                        {...slideAnimation('down')}
                    >
                        <img
                            src="/3dtc-logo-v0.png"
                            alt="3D Thread Customizer logo"
                            className="h-16 w-16 object-contain md:h-20 md:w-20"
                        />
                    </motion.header>

                    <motion.div
                        className="flex min-h-[calc(100vh-8rem)] max-w-xl flex-col justify-center"
                        {...headContainerAnimation}
                    >
                        <motion.div {...headTextAnimation}>
                            <h1 className="text-5xl leading-[0.95] font-black tracking-[-0.05em] text-stone-50 drop-shadow-[0_4px_20px_rgba(0,0,0,0.28)] md:text-7xl">
                                LET&apos;S
                                <br className="hidden md:block" />
                                DO IT.
                            </h1>
                        </motion.div>

                        <motion.div
                            className="mt-8 flex flex-col gap-6"
                            {...headContentAnimation}
                        >
                            <div className="max-w-md space-y-3 text-sm leading-7 tracking-[0.03em] text-stone-200 md:text-base">
                                <p>
                                    Customize your own exclusive shirt with our
                                    interactive 3D thread customizer.
                                </p>
                                <p>
                                    Pick a base color, add a chest logo, or lay
                                    artwork across the full garment.
                                </p>
                            </div>

                            <div>
                                <Button
                                    title="Customize It"
                                    className="min-w-40"
                                    onClick={enterCustomizer}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}

export default Home;
