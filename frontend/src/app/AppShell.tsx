function AppShell() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f7efe1,_#f8f6f1_55%,_#efe6d4)] px-6 py-10 text-stone-900">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
                <section className="w-full max-w-3xl rounded-[2rem] border border-stone-200/80 bg-white/70 p-8 shadow-[0_20px_60px_rgba(80,56,24,0.12)] backdrop-blur md:p-12">
                    <div className="mb-6 inline-flex rounded-full border border-orange-300/70 bg-orange-100/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-orange-700 uppercase">
                        Step 5 Structure
                    </div>

                    <h1 className="max-w-2xl text-4xl font-black tracking-tight text-stone-950 md:text-6xl">
                        The standardized source layout is now in place.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
                        The app now loads through dedicated app and styles
                        directories, and the long-term feature, canvas, store,
                        and shared component boundaries are ready for
                        implementation.
                    </p>

                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                            <p className="text-sm font-semibold text-stone-900">
                                App Boundary
                            </p>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Top-level composition now lives under src/app.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                            <p className="text-sm font-semibold text-stone-900">
                                Feature-Ready Folders
                            </p>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Customizer, canvas, store, lib, and shared
                                components are prepared.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                            <p className="text-sm font-semibold text-stone-900">
                                Style Layers
                            </p>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Base styles now come from a dedicated src/styles
                                entry point.
                            </p>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AppShell;
