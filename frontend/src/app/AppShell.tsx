import { useSnapshot } from 'valtio';

import customizerStore from '../store/customizerStore';

function AppShell() {
    const snapshot = useSnapshot(customizerStore);

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f7efe1,_#f8f6f1_55%,_#efe6d4)] px-6 py-10 text-stone-900">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
                <section className="w-full max-w-3xl rounded-[2rem] border border-stone-200/80 bg-white/70 p-8 shadow-[0_20px_60px_rgba(80,56,24,0.12)] backdrop-blur md:p-12">
                    <div className="mb-6 inline-flex rounded-full border border-orange-300/70 bg-orange-100/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-orange-700 uppercase">
                        Step 7 State Contract
                    </div>

                    <h1 className="max-w-2xl text-4xl font-black tracking-tight text-stone-950 md:text-6xl">
                        The typed customizer store is now in place.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
                        The new frontend now has the legacy shirt state modeled
                        as a typed Valtio store, including intro mode, base
                        color, decal toggles, and default asset paths.
                    </p>

                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                            <p className="text-sm font-semibold text-stone-900">
                                Intro State
                            </p>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Default intro mode is set to
                                <span className="ml-1 font-semibold text-stone-900">
                                    {String(snapshot.intro)}
                                </span>
                                so the landing experience remains the initial
                                entry point.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                            <p className="text-sm font-semibold text-stone-900">
                                Shirt Appearance
                            </p>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                The store starts with base color
                                <span className="mx-1 inline-flex rounded-md border border-stone-300 bg-white px-2 py-0.5 font-mono text-xs text-stone-900">
                                    {snapshot.color}
                                </span>
                                and logo texture enabled by default.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                            <p className="text-sm font-semibold text-stone-900">
                                Decal Assets
                            </p>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Both decal slots currently point at
                                <span className="mx-1 inline-flex rounded-md border border-stone-300 bg-white px-2 py-0.5 font-mono text-xs text-stone-900">
                                    {snapshot.logoDecal}
                                </span>
                                so later upload and texture steps can build on a
                                stable default.
                            </p>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AppShell;
