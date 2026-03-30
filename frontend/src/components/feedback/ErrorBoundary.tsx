import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';

import ErrorFallback from './ErrorFallback';

interface ErrorBoundaryProps {
    children: ReactNode;
    message?: string;
}

interface ErrorBoundaryState {
    error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        error: null,
    };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    resetErrorBoundary = () => {
        this.setState({ error: null });
    };

    render() {
        if (this.state.error) {
            return (
                <ErrorFallback
                    error={this.state.error}
                    message={this.props.message}
                    resetErrorBoundary={this.resetErrorBoundary}
                />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
