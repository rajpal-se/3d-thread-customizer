import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import Button from '../components/ui/Button';
import IconTab from '../components/ui/IconTab';
import {
    DECAL_TYPES,
    EDITOR_TABS,
    FILTER_TABS,
} from '../features/customizer/config/customizer.constants';
import {
    fadeAnimation,
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from '../lib/motion';
import customizerStore from '../store/customizerStore';

function AppShell() {
    const snapshot = useSnapshot(customizerStore);

    return (
        <motion.main
            className="min-h-screen bg-[radial-gradient(circle_at_top,_#f7efe1,_#f8f6f1_55%,_#efe6d4)] px-6 py-10 text-stone-900"
            {...fadeAnimation}
        >
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
                <motion.section
                    className="w-full max-w-3xl rounded-[2rem] border border-stone-200/80 bg-white/70 p-8 shadow-[0_20px_60px_rgba(80,56,24,0.12)] backdrop-blur md:p-12"
                    {...headContainerAnimation}
                >
                    <motion.div
                        className="mb-6 inline-flex rounded-full border border-orange-300/70 bg-orange-100/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-orange-700 uppercase"
                        {...slideAnimation('down')}
                    >
                        Step 9 Motion Layer
                    </motion.div>

                    <motion.h1
                        className="max-w-2xl text-4xl font-black tracking-tight text-stone-950 md:text-6xl"
                        {...headTextAnimation}
                    >
                        The typed customizer configuration layer is now in
                        place.
                    </motion.h1>

                    <motion.p
                        className="mt-6 max-w-2xl text-base leading-7 text-stone-600 md:text-lg"
                        {...headContentAnimation}
                    >
                        The new frontend now has typed editor tab definitions,
                        filter tab definitions, and decal-to-state mappings,
                        based on the legacy app but without the AI branch.
                    </motion.p>

                    <motion.div
                        className="mt-10 grid gap-4 md:grid-cols-3"
                        {...headContentAnimation}
                    >
                        <motion.article
                            className="rounded-2xl border border-stone-200 bg-stone-50 p-4"
                            {...slideAnimation('left')}
                        >
                            <p className="text-sm font-semibold text-stone-900">
                                Editor Tabs
                            </p>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                The config currently exposes
                                <span className="mx-1 font-semibold text-stone-900">
                                    {EDITOR_TABS.length}
                                </span>
                                editor tabs for color and file flows.
                            </p>
                        </motion.article>

                        <motion.article
                            className="rounded-2xl border border-stone-200 bg-stone-50 p-4"
                            {...fadeAnimation}
                        >
                            <p className="text-sm font-semibold text-stone-900">
                                Filter Tabs
                            </p>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                The filter layer keeps
                                <span className="mx-1 inline-flex rounded-md border border-stone-300 bg-white px-2 py-0.5 font-mono text-xs text-stone-900">
                                    {FILTER_TABS.map((tab) => tab.name).join(
                                        ', ',
                                    )}
                                </span>
                                aligned with the legacy texture toggles.
                            </p>
                        </motion.article>

                        <motion.article
                            className="rounded-2xl border border-stone-200 bg-stone-50 p-4"
                            {...slideAnimation('right')}
                        >
                            <p className="text-sm font-semibold text-stone-900">
                                Decal Mapping
                            </p>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Logo decals target
                                <span className="mx-1 inline-flex rounded-md border border-stone-300 bg-white px-2 py-0.5 font-mono text-xs text-stone-900">
                                    {DECAL_TYPES.logo.stateProperty}
                                </span>
                                while full artwork targets
                                <span className="mx-1 inline-flex rounded-md border border-stone-300 bg-white px-2 py-0.5 font-mono text-xs text-stone-900">
                                    {DECAL_TYPES.full.stateProperty}
                                </span>
                                with stable filter links.
                            </p>
                        </motion.article>
                    </motion.div>

                    <motion.p
                        className="mt-6 text-sm leading-6 text-stone-500"
                        {...fadeAnimation}
                    >
                        Current store defaults remain intact: intro
                        <span className="mx-1 font-semibold text-stone-900">
                            {String(snapshot.intro)}
                        </span>
                        and base color
                        <span className="mx-1 inline-flex rounded-md border border-stone-300 bg-white px-2 py-0.5 font-mono text-xs text-stone-900">
                            {snapshot.color}
                        </span>
                        .
                    </motion.p>

                    <motion.div
                        className="mt-8 space-y-5"
                        {...headContentAnimation}
                    >
                        <div className="flex flex-wrap gap-3">
                            <Button title="Customize It" />
                            <Button title="Go Back" variant="outline" />
                            <Button title="Preview State" variant="ghost" />
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            {EDITOR_TABS.map((tab) => (
                                <IconTab
                                    key={tab.name}
                                    icon={tab.icon}
                                    label={tab.label}
                                    isActive={tab.name === 'colorpicker'}
                                />
                            ))}

                            <div className="mx-1 h-10 w-px bg-stone-300" />

                            {FILTER_TABS.map((tab) => (
                                <IconTab
                                    key={tab.name}
                                    icon={tab.icon}
                                    label={tab.label}
                                    isFilterTab
                                    isActive={
                                        tab.name === DECAL_TYPES.logo.filterTab
                                            ? snapshot.isLogoTexture
                                            : snapshot.isFullTexture
                                    }
                                    accentColor={snapshot.color}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.section>
            </div>
        </motion.main>
    );
}

export default AppShell;
