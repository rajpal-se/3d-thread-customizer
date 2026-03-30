import AppShell from './AppShell';
import Providers from './providers';
import ErrorBoundary from '../components/feedback/ErrorBoundary';

function App() {
    return (
        <Providers>
            <ErrorBoundary message="The app shell failed to render.">
                <AppShell />
            </ErrorBoundary>
        </Providers>
    );
}

export default App;
