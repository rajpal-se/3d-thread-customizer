interface ErrorFallbackProps {
    error: Error;
    message?: string;
    resetErrorBoundary: () => void;
}

function ErrorFallback({
    error,
    message = 'Something went wrong.',
    resetErrorBoundary,
}: ErrorFallbackProps) {
    return (
        <div className="flex min-h-[240px] w-full flex-col items-center justify-center rounded-[1.5rem] border border-red-200/70 bg-red-50/90 p-6 text-center text-red-950 shadow-[0_12px_30px_rgba(127,29,29,0.12)] backdrop-blur">
            <p className="text-xs font-semibold tracking-[0.22em] text-red-700 uppercase">
                Render Error
            </p>

            <h2 className="mt-3 text-xl font-bold text-red-950">{message}</h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-red-900/75">
                {error.message || 'An unexpected rendering error occurred.'}
            </p>

            <button
                type="button"
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                onClick={resetErrorBoundary}
            >
                Try Again
            </button>
        </div>
    );
}

export default ErrorFallback;
