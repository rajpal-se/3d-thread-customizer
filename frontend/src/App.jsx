import Canvas from "./canvas"
import ErrorBoundary from "./components/ErrorBoundary"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {
    return (
        <ErrorBoundary message="App">
            <main className="app transition-all ease-in">
                <Home />
                <Canvas />
                <Customizer />
            </main>
        </ErrorBoundary>
    )
}

export default App
