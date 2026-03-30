import { useSnapshot } from 'valtio';

import {
    DECAL_TYPES,
    EDITOR_TABS,
    FILTER_TABS,
} from '../features/customizer/config/customizer.constants';
import customizerStore from '../store/customizerStore';

function AppShell() {
    const snapshot = useSnapshot(customizerStore);

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f7efe1,_#f8f6f1_55%,_#efe6d4)] px-6 py-10 text-stone-900">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
                <section className="w-full max-w-3xl rounded-[2rem] border border-stone-200/80 bg-white/70 p-8 shadow-[0_20px_60px_rgba(80,56,24,0.12)] backdrop-blur md:p-12">
                    <div className="mb-6 inline-flex rounded-full border border-orange-300/70 bg-orange-100/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-orange-700 uppercase">
                        Step 8 Config Layer
                    </div>

                    <h1 className="max-w-2xl text-4xl font-black tracking-tight text-stone-950 md:text-6xl">
                        The typed customizer configuration layer is now in
                        place.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
                        The new frontend now has typed editor tab definitions,
                        filter tab definitions, and decal-to-state mappings,
                        based on the legacy app but without the AI branch.
                    </p>

                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
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
                        </article>

                        <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
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
                        </article>

                        <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
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
                        </article>
                    </div>

                    <p className="mt-6 text-sm leading-6 text-stone-500">
                        Current store defaults remain intact: intro
                        <span className="mx-1 font-semibold text-stone-900">
                            {String(snapshot.intro)}
                        </span>
                        and base color
                        <span className="mx-1 inline-flex rounded-md border border-stone-300 bg-white px-2 py-0.5 font-mono text-xs text-stone-900">
                            {snapshot.color}
                        </span>
                        .
                    </p>
                </section>
            </div>
        </main>
    );
}

export default AppShell;
