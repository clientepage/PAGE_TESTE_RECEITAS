import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import HeroNew from './components/HeroNew';
import TestimonialsCompact from './components/TestimonialsCompact';
import PricingNew from './components/PricingNew';
import FAQCompact from './components/FAQCompact';
import GuaranteeSection from './components/GuaranteeSection';
import SocialProof from './components/SocialProof';

const Footer = lazy(() => import('./components/Footer'));

// Simple Error Boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error; resetErrorBoundary: () => void }> },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || ErrorFallback;
      return <FallbackComponent error={this.state.error!} resetErrorBoundary={() => this.setState({ hasError: false, error: null })} />;
    }

    return this.props.children;
  }
}

// Optimized loading component - memoized
const LoadingSpinner = React.memo(() => (
  <div className="flex justify-center items-center py-8 min-h-[200px]" role="status" aria-label="Carregando">
    <div className="w-8 h-8 border-2 border-natural-200 border-t-natural-600 rounded-full animate-spin"></div>
  </div>
));
LoadingSpinner.displayName = 'LoadingSpinner';

// Intersection Observer for better lazy loading
const LazySection = React.memo(({ children, fallback = <div className="h-20 lazy-section"></div> }: { children: React.ReactNode, fallback?: React.ReactNode }) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
));
LazySection.displayName = 'LazySection';

// Error fallback component - memoized
const ErrorFallback = React.memo(({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-natural-50">
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-natural-800 mb-4">Algo deu errado</h2>
      <p className="text-natural-600 mb-4">Ocorreu um erro inesperado. Tente recarregar a página.</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-natural-600 text-white px-6 py-3 rounded-full hover:bg-natural-700 transition-colors"
      >
        Tentar novamente
      </button>
    </div>
  </div>
));
ErrorFallback.displayName = 'ErrorFallback';

function App() {
  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <div className="font-sans text-gray-900 optimize-rendering">
        <Header />
        <main>
          <HeroNew />
          <TestimonialsCompact />
          <PricingNew />
          <GuaranteeSection />
          <FAQCompact />
        </main>
        <LazySection>
          <Footer />
        </LazySection>
        <SocialProof />
      </div>
    </ErrorBoundary>
  );
}

export default App;